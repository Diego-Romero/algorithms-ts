/**
Problem Statement ##
Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

Example 1:

Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]
Explanation: The output list contains the common intervals between the two lists.
Example 2:

Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
Output: [5, 7], [9, 10]
Explanation: The output list contains the common intervals between the two lists.
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

const merge = function (intervals_a, intervals_b) {
  let result = [];
  let a = 0,
    b = 0;
  // iterate through all p2s, when we encounter an overlap, calculate it
  while (a < intervals_a.length && b < intervals_b.length) {
    const intervalA = intervals_a[a];
    const intervalB = intervals_b[b];
    if (intervalsOverlap(intervalA, intervalB)) {
      const overlap = calculateOverlap(intervalA, intervalB);
      result.push(overlap);
      if (intervalB.end <= intervalA.end) b++; // move B if we have reached the max of one
    }
    a++;
  }

  return result;
};

function intervalsOverlap(a, b) {
  // overlap by one starting before the other
  let first, second;
  if (a.start <= b.start) {
    first = a;
    second = b;
  } else {
    first = a;
    second = b;
  }
  return second.start <= first.end;
}

function calculateOverlap(a, b) {
  return new Interval(Math.max(a.start, b.start), Math.min(a.end, b.end));
}

process.stdout.write("Intervals Intersection: ");
let result = merge(
  [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals Intersection: ");
result = merge(
  [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
  [new Interval(5, 10)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
