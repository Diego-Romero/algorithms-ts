/*
You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.


Solution:
For the graph to be a valid tree, it must have exactly n - 1 edges.
Any less and it can't possibly be fully connected. Any more, and it has 
to contain cycles. Additionally, if the graph is fully connected and 
contains exactly n - 1 edges, it can't possibly contain a cycle, therefore
it has to be a tree.
*/

class DisjointedSet {
  root;
  constructor(size) {
    this.root = new Array(size);
    for (let i = 0; i < size; i++) this.root[i] = i;
    // console.log(this.root);
  }

  // find the parent of this current node
  findParent(x) {
    while (this.root[x] !== x) {
      x = this.root[x];
    }
    return x;
  }

  // we want to use a disjoint set, to check if the parent
  // is the same, if they are the same we have a cycle in the graph
  // else return true
  union(x, y) {
    const rootX = this.findParent(x);
    const rootY = this.findParent(y);

    // console.log("adding", x, y, " with roots ", rootX, rootY);
    if (rootX === rootY) return false;
    this.root[rootY] = rootX;

    return true;
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
const validTree = function (n, edges) {
  if (edges.length !== n - 1) return false;
  // need to create a union between the edges
  const ds = new DisjointedSet(n);
  for (let [root, target] of edges) {
    if (!ds.union(root, target)) return false;
  }

  return true;
};

const n = 5,
  edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ]; // has exactly n - 1 edges, we should try

console.log(validTree(n, edges)); // true

console.log(
  validTree(3, [
    [0, 1],
    [0, 2],
    [1, 2],
  ])
); // false, as it has a cycle
console.log(
  validTree(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ])
); // false, as it has more edges than N - 1

console.log(
  validTree(5, [
    [0, 1],
    [1, 2],
    [2, 3],
  ])
); // false, as it has less edges than N - 1
