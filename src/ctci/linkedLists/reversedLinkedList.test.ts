// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function reverseLinkedList(head: LinkedList): LinkedList {
  

  return head;
}

/*
list: 1 2 3 4 5 6
      i
      n

list: 1 2

list: 1
jjj

Brute force: put the elements in an array and reverse them, then re set the pointers O(N) time & space
*/

const printList = (node: LinkedList): string => {
  let result = "" + node.value,
    iterator = node;
  while (iterator.next !== null) {
    iterator = iterator.next;
    result += ", " + iterator.value;
  }

  return result;
};

describe("reverse linked list", () => {
  test("it should work", () => {
    const head = new LinkedList(1);
    head.next = new LinkedList(2);
    head.next.next = new LinkedList(3);
    head.next.next.next = new LinkedList(4);
    head.next.next.next.next = new LinkedList(5);
    head.next.next.next.next.next = new LinkedList(6);

    const result = reverseLinkedList(head);
    console.log(printList(result));
  });
});
