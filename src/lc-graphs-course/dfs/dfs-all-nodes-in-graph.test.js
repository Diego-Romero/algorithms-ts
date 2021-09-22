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

function allPathsBetweenTwoNodes(head) {
  if (head === null) return "";

  let order = [];
  const stack = [];
  const visited = new Set();
  stack.push(head);

  while (stack.length > 0) {
    const top = stack.pop();
    if (!visited.has(top.value)) {
      order.push(top.value)
      visited.add(top.value);
      for (let edge of top.edges) stack.push(edge);
    }
  }

  return order;
}

console.log(allPathsBetweenTwoNodes(a));
