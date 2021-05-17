/**
 * Implement BFS method on the Node class, which takes in an empty array, traverses the tree using the BFS approach, stores the nodes in the input array and returns it.
 */

// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array: string[]): string[] {
    const queue: Node[] = [this];
    array.push(this.name)

    while(queue.length !== 0) {
      // console.log('current q', queue)
      const length = queue.length;
      // pop as many nodes as there are on the Q
      for (let i = 0; i < length; i++) {
        const current = queue.shift();
        for (let child of current!.children) {
          array.push(child!.name);
          queue.push(child)
        }
      }
    }
    console.log(array)
    return array;
  }
}

describe('BFS', () => {
  test('should return the nodes in the correct order', () => {
    const head = new Node("a")
    head.children.push(new Node('b'))
    head.children.push(new Node('c'))
    head.children.push(new Node('d'))

    head.children[0].children.push(new Node('e'))
    head.children[0].children.push(new Node('f'))

    head.children[2].children.push(new Node('g'))
    head.children[2].children.push(new Node('h'))

    head.children[0].children[1].children.push(new Node('i'))
    head.children[0].children[1].children.push(new Node('j'))
    head.children[2].children[1].children.push(new Node('k'))

    const result: string[] = 'abcdefghijk'.split('')
    expect(head.breadthFirstSearch([])).toEqual(result);
  })
  
})

