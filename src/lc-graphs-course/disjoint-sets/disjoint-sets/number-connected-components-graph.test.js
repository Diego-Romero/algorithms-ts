/*

You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.

Solution:
This problem is really similar to the number of provinces,
That is because what we are effectively trying to find
is the amount of nodes with the same root;
*/

// need to tweak quick union.
class quickUnion {
  count;
  constructor(size) {
    this.count = size;
    this.roots = new Array(size);
    for (let i = 0; i < size; i++) {
      this.roots[i] = [i];
    }
  }

  find(x) {
    while (this.roots[x] !== x) x = this.roots[x];
    return x;
  }

  // whenever we do a merge, we reduce the count by one
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
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const qf = new quickUnion(n);
  for (let [node, target] of edges) {
    qf.union(node, target);
  }

  return qf.count;
};

const n = 4,
  edges = [
    [2, 3],
    [1, 2],
    [1, 3],
  ];

console.log(countComponents(n, edges));

describe("number of connected components in graph", () => {
  test("should work with 2 graphs", () => {
    const n = 5,
      edges = [
        [0, 1],
        [1, 2],
        [3, 4],
      ];
    expect(countComponents(n, edges)).toEqual(2);
  });

  test("should work with 1 graphs", () => {
    const n = 5,
      edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ];
    expect(countComponents(n, edges)).toEqual(1);
  });

  test("should work with cheeky 1 graph", () => {
    const n = 4,
      edges = [
        [2, 3],
        [1, 2],
        [1, 3],
      ];
    expect(countComponents(n, edges)).toEqual(2);
  });
});
