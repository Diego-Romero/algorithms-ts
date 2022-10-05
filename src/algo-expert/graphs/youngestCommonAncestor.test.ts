// This is an input class. Do not edit.
class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

/**
 * Question: We would like the youngest common ancestor between two nodes. This is the first ancestor that is a parent or equal to both.
 * 
 * Clarifying Question:
 * - Can all the nodes be the same one? 
 * - Could we do the comparison by the name of each node? 
 * 
 * examples:
  - drawed in the ipad

  Approach:
  - Get the depth of both nodes in the graph.
  - move the Node with the lowest depth up, until we have reached the same depth, from that point see if they are the same and if not keep moving up one level at the time.
 */

// O(N) time as the worse case scenario is that the tree looks like a graph. O(1) space.
export function getYoungestCommonAncestor(
  top: AncestralTree,
  one: AncestralTree,
  two: AncestralTree
) {
  let oneDepth = 0,
    twoDepth = 0;
  let iterator = one;
  while (iterator.ancestor !== null) {
    oneDepth++;
    iterator = iterator.ancestor;
  }
  iterator = two;
  while (iterator.ancestor !== null) {
    twoDepth++;
    iterator = iterator.ancestor;
  }

  let oneIterator = one,
    twoIterator = two;
  // need to put them side to side
  while (oneDepth > twoDepth && oneIterator.ancestor !== null) {
    oneIterator = oneIterator.ancestor;
    oneDepth--;
  }
  while (twoDepth > oneDepth && twoIterator.ancestor !== null) {
    twoIterator = twoIterator.ancestor;
    twoDepth--;
  }

  // both iterators are at the same level.
  while (oneIterator !== twoIterator) {
    oneIterator = oneIterator.ancestor!;
    twoIterator = twoIterator.ancestor!;
  }
  return oneIterator;
}
