/*
Problem Statement#
Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
}

const reverse_every_k_elements = function (head, k) {
  let current = head;
  prev = null;
  let newStart = null;
  while (true) {
    let prevStart = current; // 3, 4
    // reverse this list until k
    let i = 0;
    while (i < k && current !== null) {
      // reverses sub list until k
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      i++;
    }
    if (!newStart) newStart = prev; // after reversing the first few elements;
    prevStart.next = current;
    if (current === null) break;
    prev = prevStart;
    console.log(prev.value, current.value);
  }
  return newStart;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(
  `Nodes of reversed LinkedList are: ${reverse_every_k_elements(
    head,
    3
  ).get_list()}`
);
