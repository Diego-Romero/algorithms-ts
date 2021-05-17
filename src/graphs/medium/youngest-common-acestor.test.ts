/**
 * Given a tree with link also pointing to its parent, find the lowest common ancestor between the two.
 */

class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

// solution in O(D) where d is the depth of the tree, D space too
// export function getYoungestCommonAncestor(
//   topAncestor: AncestralTree,
//   descendantOne: AncestralTree,
//   descendantTwo: AncestralTree
// ) {
//   const set = new Set<AncestralTree>();
//   let iterator: AncestralTree | null = descendantOne;
//   while (iterator !== null) {
//     set.add(iterator);
//     iterator = iterator.ancestor;
//   }
//   iterator = descendantTwo;
//   while (iterator !== null) {
//     if (set.has(iterator)) return iterator;
//     iterator = iterator.ancestor;
//   }
//   return topAncestor;
// }

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
) {
  let iterator: AncestralTree | null = descendantOne,
    oneDepth: number = 0,
    twoDepth: number = 0;
  while (iterator !== null) {
    oneDepth++;
    iterator = iterator.ancestor;
  }

  iterator = descendantTwo;
  while (iterator !== null) {
    twoDepth++;
    iterator = iterator.ancestor;
  }
  // make them have the same height
  let iterator1: AncestralTree = descendantOne;
  let iterator2: AncestralTree = descendantTwo;
  // console.log(oneDepth, twoDepth);
  
  while (oneDepth > twoDepth && iterator1.ancestor !== null) {
    iterator1 = iterator1.ancestor;
    oneDepth--;
  }
  while (twoDepth > oneDepth && iterator2.ancestor !== null) {
    iterator2 = iterator2.ancestor;
    twoDepth--;
  }
  // console.log(oneDepth, twoDepth);
  // console.log(iterator1, iterator2)
  if (iterator1 === iterator2) return iterator1;
  while (iterator1 !== iterator2) {
    if (iterator1.ancestor === iterator2.ancestor) return iterator1.ancestor;
    if (iterator1.ancestor !== null) iterator1 = iterator1.ancestor;
    if (iterator2.ancestor !== null) iterator2 = iterator2.ancestor;
  }


  return topAncestor;
}

describe("lowest common ancestor", () => {
  test("should find the lowest common ancestor in a small tree", () => {
    const A = new AncestralTree("A");
    const B = new AncestralTree("B");
    const C = new AncestralTree("C");
    B.ancestor = A;
    C.ancestor = A;
    expect(getYoungestCommonAncestor(A, B, C)).toEqual(A);
  });
  test("should find the lowest common ancestor in a bigger tree", () => {
    const A = new AncestralTree("A");
    const B = new AncestralTree("B");
    const C = new AncestralTree("C");
    const D = new AncestralTree("D");
    const E = new AncestralTree("E");
    B.ancestor = A;
    C.ancestor = A;
    D.ancestor = B;
    E.ancestor = B;
    expect(getYoungestCommonAncestor(A, D, E)).toEqual(B);
  });
  test("should find the lowest common ancestor in a more complex tree", () => {
    const A = new AncestralTree("A");
    const B = new AncestralTree("B");
    const C = new AncestralTree("C");
    const D = new AncestralTree("D");
    const E = new AncestralTree("E");
    const F = new AncestralTree("F");
    const G = new AncestralTree("G");
    B.ancestor = A;
    C.ancestor = A;
    D.ancestor = B;
    E.ancestor = B;
    F.ancestor = D;
    G.ancestor = D;
    expect(getYoungestCommonAncestor(A, F, E)).toEqual(B);
  });
});
