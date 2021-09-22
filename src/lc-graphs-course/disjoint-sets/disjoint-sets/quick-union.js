/*
Union find is on average better than quick find,
As we don't do a linear search every time in the union function.
Instead we recursively find the parent of the node, which in a worse case
It will be O(N) but rarely.
*/
class UnionFind {
  root;
  constructor(size) {
    this.root = new Array(size);
    for (let i = 0; i < size; i++) this.root[i] = i;
  }

  /**
   * The Heavy lifting here occurs in the find, as we have a recursive
   * function checking for the parent node.
   * @param {*} x
   * @returns
   */
  findRoot(x) {
    if (x === this.root[x]) return x;
		const parent = this.findRoot(this.root[x]);
		this.root[x] = parent;
		return this.root[x];
  }

  /**
   * In this case, union only joins nodes with its parent
   */
  union(x, y) {
    const rootX = this.findRoot(x);
    const rootY = this.findRoot(y);
    if (rootX !== rootY) this.root[rootY] = rootX;
  }

  connected(x, y) {
    return this.findRoot(x) === this.findRoot(y);
  }
}

const uf = new UnionFind(10);
// 1-2-5-6-7 3-8-9 4
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
console.log(uf.connected(1, 5)); // true
console.log(uf.connected(5, 7)); // true
console.log(uf.connected(4, 9)); // false
// // 1-2-5-6-7 3-8-9-4
uf.union(9, 4);
console.log(uf.connected(4, 9)); // true
