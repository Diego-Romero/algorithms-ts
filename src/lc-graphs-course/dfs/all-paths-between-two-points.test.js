class Node {
  value;
  edges = [];
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.edges = [b, c, d];
b.edges = [a, e, f];
c.edges = [a, e];
d.edges = [a, e];
e.edges = [c, b, f];
f.edges = [b, e];

class StackNode {
  constructor(path, visited, node) {
    this.path = path;
    this.visited = visited;
    this.node = node;
  }
}

/**
 * Need to use a stack to keep track of the current path and the visited nodes
 */
function allPathsBetweenTwoNodes(start, target) {
  let result = [];
  const stack = [];
  const firstNode = new StackNode([], new Set([]), start);
  stack.push(firstNode);

  while (stack.length > 0) {
    const top = stack.pop();
    const path = top.path;
    const visited = top.visited;
    const node = top.node;
    // if the last of our path matches the target, we have found a path
    if (node.value === target.value) {
      result.push([...path, node.value]); // push a copy of this path
    } else {
      // update the current values
      visited.add(node.value);
      path.push(node.value);

      // Add all the unvisited children
      for (let edge of node.edges) {
        if (!visited.has(edge.value)) {
          // add a new node, creating deep copies of the elements
          const newNode = new StackNode(
            [...path],
            new Set(Array.from(visited)),
            edge
          );
          stack.push(newNode);
        }
      }
    }
  }

  return result;
}

console.log(allPathsBetweenTwoNodes(a, b));
