/*
Problem Statement#
Topological Sort of a directed graph (a graph with unidirectional edges) is a linear ordering of its vertices such that for every directed edge (U, V) from vertex U to vertex V, U comes before V in the ordering.

Given a directed graph, find the topological ordering of its vertices.

Example 1:

Input: Vertices=4, Edges=[3, 2], [3, 0], [2, 0], [2, 1]
Output: Following are the two valid topological sorts for the given graph:
1) 3, 2, 0, 1
2) 3, 2, 1, 0
    3   
    2   
    0   
    1   
Example 2:

Input: Vertices=5, Edges=[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]
Output: Following are all valid topological sorts for the given graph:
1) 4, 2, 3, 0, 1
2) 4, 3, 2, 0, 1
3) 4, 3, 2, 1, 0
4) 4, 2, 3, 1, 0
5) 4, 2, 0, 3, 1
    4   
    2   
    3   
    0   
    1   
Example 3:

Input: Vertices=7, Edges=[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]
Output: Following are all valid topological sorts for the given graph:
1) 5, 6, 3, 4, 0, 1, 2
2) 6, 5, 3, 4, 0, 1, 2
3) 5, 6, 4, 3, 0, 2, 1
4) 6, 5, 4, 3, 0, 1, 2
5) 5, 6, 3, 4, 0, 2, 1
6) 5, 6, 3, 4, 1, 2, 0

There are other valid topological ordering of the graph too.
*/

/*
In order to solve this I need 2 data structures, one holding an adjacency list, which is each vertex containing a list with all its children 
O(V + E) time and space
*/
const topological_sort = function (vertices, edges) {
  const sortedOrder = [];
  const adjacent = {},
    count = {};

  for (let i = 0; i < edges.length; i++) {
    const [current, target] = edges[i];
    // need to create the adjacency list
    if (adjacent[current] === undefined) adjacent[current] = [];
    if (adjacent[target] === undefined) adjacent[target] = [];
    if (count[target] === undefined) count[target] = 0;
    if (count[current] === undefined) count[current] = 0;
    // console.log(adjacent, count);

    adjacent[current].push(target);
    count[target]++;
  }

  const queue = [];
  // need to find all the ones that dont have any dependencies in the count list
  for (let [key, value] of Object.entries(count)) {
    if (value === 0) queue.push(key);
  }

  // console.log(adjacent);
  // console.log(count);
  // console.log(queue);

  // BFS through the nodes
  while (queue.length > 0) {
    // remove the element from the Q
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      // put it in the final order
      sortedOrder.push(node); // node has no more deps
      const children = adjacent[node];
      // console.log(node, children);
      // for every node in the children reduce their dependency count
      for (let j = 0; j < children.length; j++) {
        const child = children[j];
        count[child] = count[child] - 1;
        if (count[child] === 0) {
          // this children node is free as well
          queue.push(child);
        }
      }
    }
  }

  return sortedOrder;
};

console.log(
  `Topological sort: ${topological_sort(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
  ])}`
); // [3,2,0,1]
console.log(
  `Topological sort: ${topological_sort(5, [
    [4, 2],
    [4, 3],
    [2, 0],
    [2, 1],
    [3, 1],
  ])}`
); // [4,2,3,0,1]
console.log(
  `Topological sort: ${topological_sort(7, [
    [6, 4],
    [6, 2],
    [5, 3],
    [5, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 1],
  ])}`
);

// [5,6,3,4,0,2,1]
