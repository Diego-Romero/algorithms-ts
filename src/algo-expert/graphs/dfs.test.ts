// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  // solution in O(N) time | space, because we return N names. If we were
  // just console logging, the space would be the max depth of the tree
  depthFirstSearch(array: string[]) {
    const result: string[] = [];

    function helper(node: Node) {
      result.push(node.name);
      for (let children of node.children) {
        helper(children);
      }
    }

    helper(this);

    return result;
  }
}
