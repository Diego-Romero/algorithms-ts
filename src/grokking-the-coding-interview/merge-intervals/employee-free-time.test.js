/*
Employee Free Time (hard)#
For ‘K’ employees, we are given a list of intervals representing the working hours of each employee. Our goal is to find out if there is a free interval that is common to all employees. You can assume that each list of employee working hours is sorted on the start time.

Example 1:

Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
Output: [3,5]
Explanation: Both the employees are free between [3,5].
Example 2:

Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
Output: [4,6], [8,9]
Explanation: All employees are free between [4,6] and [8,9].
Example 3:

Input: Employee Working Hours=[[[1,3]], [[2,4]], [[3,5], [7,9]]]
Output: [5,7]
Explanation: All employees are free between [5,7].
*/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

// compute the interval range between employees which is inclusive, only times in between

// solution in O(N log N) time | N space
const find_employee_free_time = function (intervals) {
  // sort the schedule, merge the intervals, iterate through intervals pushing the time gap between schedules
  if (intervals.length <= 1) return [];
  const flat = intervals.flat();
  const sorted = flat.sort((a, b) => a.start - b.start);
  // console.log("sorted", sorted);

  const merged = [];
  let start = sorted[0].start;
  let end = sorted[0].end;
  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    if (current.start <= end) {
      // merge if they overlap
      end = Math.max(current.end, end);
    } else {
      merged.push(new Interval(start, end));
      start = current.start;
      end = current.end;
    }
  }
  merged.push(new Interval(start, end));
  // console.log(merged);
  result = [];
  for (let i = 1; i < merged.length; i++) {
    const prev = merged[i - 1];
    const curr = merged[i];
    if (curr.start > prev.end) result.push(new Interval(prev.end, curr.start));
  }

  return result;
};

input = [
  [new Interval(1, 3), new Interval(5, 6)],
  [new Interval(2, 3), new Interval(6, 8)],
];

intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

input = [
  [new Interval(1, 3), new Interval(9, 12)],
  [new Interval(2, 4)],
  [new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

input = [
  [new Interval(1, 3)],
  [new Interval(2, 4)],
  [new Interval(3, 5), new Interval(7, 9)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);
