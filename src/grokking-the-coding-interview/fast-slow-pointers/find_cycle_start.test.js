class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function (head) {
  // find the cycle nodes and put them in a set
  let slow = head,
    fast = head;
  while (head.next !== null && head.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) break;
  }
  const set = new Set();
  while (!set.has(slow)) {
    set.add(slow);
    slow = slow.next;
  }
  let start = head;
  while (!set.has(start)) {
    start = start.next;
  }

  return start;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);
