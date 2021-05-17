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

  depthFirstSearch(array: string[]) {
    function traverse(node: Node) {
      array.push(node.name)
      for (node of node.children) {
        traverse(node)
      }
    }
    traverse(this)
    return array;
  }
}

/**
 * Implement DFS method on the Node class, which takes an empty array, traverses the tree using the DFS approach, and stores all of the nodes names in the input array and returns it.
 */


describe('DFS', () => {
  const A = new Node('A');
  A.addChild('B')
  A.addChild('C')
  A.addChild('D')
  A.children[0].addChild('E')
  A.children[0].addChild('F')
  A.children[2].addChild('G')
  A.children[2].addChild('H')

  test('should return the correct order', () => {
    const input: string[] = []
    expect(A.depthFirstSearch(input)).toEqual(['A', 'B', 'E', 'F', 'C', 'D', 'G', 'H'])
  })
    

})
