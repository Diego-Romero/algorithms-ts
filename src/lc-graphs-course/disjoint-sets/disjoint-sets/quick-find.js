/*
In quick find the find function has a O(1) find but O(N) union.
*/

class UnionFind {
  constructor(size) {
    this.root = new Array(size + 1);
    for (let i = 0; i <= size; i++) this.root[i] = i;
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

const disjointSet = new UnionFind(10);
// 1-2-5-6-7 3-8-9 4
disjointSet.union(1, 2);
disjointSet.union(2, 5);
disjointSet.union(5, 6);
disjointSet.union(6, 7);
disjointSet.union(3, 8);
disjointSet.union(8, 9);

console.log(disjointSet.connected(1, 5)); // true
console.log(disjointSet.connected(5, 7)); // true
console.log(disjointSet.connected(4, 9)); // false

disjointSet.union(9, 4);
console.log(disjointSet.connected(4, 9)); // true
