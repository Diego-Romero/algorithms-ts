/*

There are n people in a social group labeled from 0 to n - 1. You are given an array logs where logs[i] = [timestampi, xi, yi] indicates that xi and yi will be friends at the time timestampi.

Friendship is symmetric. That means if a is friends with b, then b is friends with a. Also, person a is acquainted with a person b if a is friends with b, or a is a friend of someone acquainted with b.

Return the earliest time for which every person became acquainted with every other person. If there is no such earliest time, return -1.

 

Example 1:

Input: logs = [
	[20190101,0,1],
	[20190104,3,4],
	[20190107,2,3],
	[20190211,1,5],
	[20190224,2,4],
	[20190301,0,3],
	[20190312,1,2],
	[20190322,4,5]], 
	
	n = 6

[0,1,2,3,4,5,6]
[0, 1, 5]
[2, 3, 4]

Output: 20190301
Explanation: 
The first event occurs at timestamp = 20190101 and after 0 and 1 become friends we have the following friendship groups [0,1], [2], [3], [4], [5].
The second event occurs at timestamp = 20190104 and after 3 and 4 become friends we have the following friendship groups [0,1], [2], [3,4], [5].
The third event occurs at timestamp = 20190107 and after 2 and 3 become friends we have the following friendship groups [0,1], [2,3,4], [5].
The fourth event occurs at timestamp = 20190211 and after 1 and 5 become friends we have the following friendship groups [0,1,5], [2,3,4].
The fifth event occurs at timestamp = 20190224 and as 2 and 4 are already friends anything happens.
The sixth event occurs at timestamp = 20190301 and after 0 and 3 become friends we have that all become friends.
Example 2:

Input: logs = [[0,2,0],[1,0,1],[3,0,3],[4,1,2],[7,3,1]], n = 4
[0,1,2,3]

[2, 0, 1, 3]


Output: 3

*/

class DisjointSet {
  count;
  roots;
  constructor(size) {
    this.roots = new Array(size);
    this.count = size - 1;
    for (let i = 0; i < size; i++) {
      this.roots[i] = i;
    }
  }

  find(x) {
    while (this.roots[x] !== x) x = this.roots[x];
    return this.roots[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.roots[rootY] = rootX;
      this.count--;
    }
  }
}

/**
 * Solution using a disjoint set, we keep a counter of every time we
 * did a merge, whenever our count hits 0, we know we have done enough
 * merges and that all friends are friends of friends
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
const earliestAcq = function (logs, n) {
	const sorted = logs.sort((a, b) => a - b);
  const ds = new DisjointSet(n);

  // return the timestamp once we have reached 0
  for (let [ts, node, target] of sorted) {
    ds.union(node, target);
    if (ds.count === 0) return ts;
  }

  return -1;
};

const logs = [
    [20190101, 0, 1],
    [20190104, 3, 4],
    [20190107, 2, 3],
    [20190211, 1, 5],
    [20190224, 2, 4],
    [20190301, 0, 3], // answer
    [20190312, 1, 2],
    [20190322, 4, 5],
  ],
  n = 6;

console.log(earliestAcq(logs, n));

console.log(
  earliestAcq(
    [
      [0, 2, 0],
      [1, 0, 1],
      [3, 0, 3], // answer
      [4, 1, 2],
      [7, 3, 1],
    ],
    4
  )
);
