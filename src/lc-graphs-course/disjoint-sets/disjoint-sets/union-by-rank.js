/*
Same as Union find, but we are doing the unions by rank, 
meaning that we will always have the root of the longest tree,
this avoid creating things like a linked list, which gives us a longer run time.
*/
class UnionFind {
  root;
  rank;
  constructor(size) {
    this.root = new Array(size);
    this.rank = new Array(size);
    for (let i = 0; i < size; i++) {
      this.root[i] = i;
      this.rank[i] = 1;
    }
  }

  /**
   * The Heavy lifting here occurs in the find, as we have a recursive
   * function checking for the parent node.
   * Log N
   */
  findRoot(x) {
    while (x !== this.root[x]) x = this.root[x];
    return x;
  }

  /**
   * In this case, union only joins nodes with its parent
   * Log N
   */
  union(x, y) {
    const rootX = this.findRoot(x);
    const rootY = this.findRoot(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) this.root[rootY] = rootX;
      else if (this.rank[rootX] < this.rank[rootY]) this.root[rootX] = rootY;
      else {
        this.root[rootY] = rootX;
        this.rank[rootX] += 1;
      }
    }
  }

  // Log N
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
// 1-2-5-6-7 3-8-9-4
uf.union(9, 4);
console.log(uf.connected(4, 9)); // true
