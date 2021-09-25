/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
Example 2:

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
Example 3:

Input: numCourses = 1, prerequisites = []
Output: [0]
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= numCourses * (numCourses - 1)
prerequisites[i].length == 2
0 <= ai, bi < numCourses
ai != bi
All the pairs [ai, bi] are distinct.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function(courses, prerequisites) {
  /*
  Need to create a dependency graph in order to perform topological sort.
  For this we need to create an in and out degree map.
  Then we can use a queue to iterate through the nodes using topological sorting.
  The time | space complexity of this is of (V + E) where V are the vertices and E are the edges.
  */
  // create the maps
  const inbound = new Map(), outbound = new Map();
  for (let i = 0; i < courses; i++) {
    inbound.set(i, 0);
    outbound.set(i, []);
  }
  
  for (let [target, source] of prerequisites) {
    inbound.set(target, inbound.get(target) + 1);
    outbound.get(source).push(target)
  }
  
  const queue = [];
  for (let [k, v] of inbound.entries()) {
    if (v === 0) queue.push(k);
  }
  if (queue.length === 0) return []; // this means we have an acyclic graph.
  const result = [];
  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      result.push(node);
      const children = outbound.get(node);
      for (let child of children) {
        inbound.set(child, inbound.get(child) - 1);
        if (inbound.get(child) === 0) queue.push(child);
      }
    }
  }
  
  if (result.length !== courses) return []; // we didn't find a valid topological sort, as some courses have been left out.
  return result;
};