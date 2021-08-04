// This is an input class. Do not edit.
class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

export function getYoungestCommonAncestor(
  top: AncestralTree,
  one: AncestralTree,
  two: AncestralTree
) {
  let result: AncestralTree = top;

  function getDepth(node: AncestralTree): number {
    let count = 0;
    while (node.ancestor !== null) {
      count++;
      node = node.ancestor;
    }
    return count;
  }
  let d1 = getDepth(one);
  let d2 = getDepth(two);
  let i1: AncestralTree | null = one;
  let i2: AncestralTree | null = two;
  console.log(d1, d2);
  // figure out the smallest, and make them equal
  while (d1 > d2) {
    i1 = i1.ancestor!;
    d1--;
  }
  while (d2 > d1) {
    i2 = i2.ancestor!;
    d2--;
  }
  console.log(i1, i2);
  while (i1.name !== i2.name) {
    i1 = i1.ancestor!;
    i2 = i2.ancestor!;
  }

  return i1;
}

/**
Approach:
- get level of each node


- 2 possible cases, either the current node is one of the descendants, 
but we can only start from one of the children;
*/
