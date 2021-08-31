/**
Problem Statement ##
Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

Example 1:

Appointments: [[1,4], [2,5], [7,9]]
Output: false
Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
Example 2:

Appointments: [[6,7], [2,4], [8,12]]
Output: true
Explanation: None of the appointments overlap, therefore a person can attend all of them.
Example 3:

Appointments: [[4,5], [2,3], [3,6]]
Output: false
Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.
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
/*
Clarifying questions:
- Are ranges inclusive or exclusive
- will the appointments be sorted?
- what if there are no given intervals
- can we get negative values?

other examples:
- just 1 interval
- all with inclusive ranges
*/

// BCR O(N log N) time | O(1) space
const can_attend_all_appointments = function (intervals) {
  if (intervals.length <= 1) return true;
  intervals.sort((a, b) => a.start - b.start);
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const prev = intervals[i - 1];
    if (current.start < prev.end) return false;
  }
  return true;
};

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
  ])}`
);

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
  ])}`
);

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
  ])}`
);
