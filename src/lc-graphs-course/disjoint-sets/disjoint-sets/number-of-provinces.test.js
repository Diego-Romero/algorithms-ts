/*
This will give us the sets that belong together, using a root array
*/
class UnionFind {
  constructor(size) {
    this.root = new Array(size);
    for (let i = 0; i < size; i++) this.root[i] = i;
  }

  /**
   * In union find, we make the children nodes just point to the parent
   * to make it easier to find
   */
  find(x) {
    return this.root[x];
  }

  /*
	In union find, when we join two sets, we need to make it point
	to the parent of one, this is where the heavy lifting is.
	In this case we are making the children that use to point to Y
	now point to X.
	*/
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      for (let i = 0; i < this.root.length; i++) {
        if (this.root[i] === rootY) this.root[i] = rootX;
      }
    }
  }

  // the two vertices that exist
  connected(x, y) {
    return this.find(x) == this.find(y);
  }
}
// class QuickUnion {
//   root;
//   constructor(size) {
//     this.root = new Array(size);
//     for (let i = 0; i < size; i++) {
//       this.root[i] = i;
//     }
//   }

//   findRoot(x) {
//     // recursively keep going up until we find the parent
//     if (x === this.root[x]) return x;
//     const parent = this.findRoot(this.root[x]);
//     this.root[x] = parent;
//     return this.root[x];
//   }

//   union(x, y) {
//     const rootX = this.findRoot(x);
//     const rootY = this.findRoot(y);
//     // if they are different, make the parent of y, the root of x
//     if (rootX !== rootY) this.root[rootY] = rootX;
//   }

//   connected(x, y) {
//     return this.findRoot(x) === this.findRoot(y);
//   }
// }

/**
 * Can solve this problem with the help of a disjoint set, particularly
 * a quick union approach.
 * connect all the nodes, that have a 1 iterating over this parent.
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
  if (isConnected.length === 0) return 0;
  const set = new UnionFind(isConnected.length);
  // create the union between all the vertices.
  for (let i = 0; i < isConnected.length; i++) {
    const province = isConnected[i];
    // for every province, we need to add it to the quick union disjoint set
    for (let j = 0; j < province.length; j++) {
      if (province[j] === 1) set.union(i, j);
    }
  }
  // need to find the number of unique roots
  const countSet = new Set(set.root);
	console.log(set.root, countSet)

  return countSet.size;
};

// const isConnected = [
//   [1, 1, 0],
//   [1, 1, 0],
//   [0, 0, 1],
// ];

// console.log(findCircleNum(isConnected));

describe("number of provinces", () => {
  test("should work with a simple case", () => {
    const isConnected = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ];
    expect(findCircleNum(isConnected)).toEqual(2);
  });
  test("should work when all are separated", () => {
    const isConnected = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    expect(findCircleNum(isConnected)).toEqual(3);
  });
  test("should work with a more complex example", () => {
    const array = [
      [1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [0, 0, 0, 1, 0, 0, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    ];
    expect(findCircleNum(array)).toEqual(1);
  });
});
