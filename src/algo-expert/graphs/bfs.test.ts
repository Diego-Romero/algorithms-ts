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

  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this];
    while (queue.length !== 0) {
      const length = queue.length;
      for (let i = 0; i < length; i++) {
        const current = queue.shift();
				array.push(current!.name);
				current!.children.forEach(n => queue.push(n));
      }
    }
    // Write your code here.
    return array;
  }
}
