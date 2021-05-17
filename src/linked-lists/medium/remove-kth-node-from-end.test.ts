/**
 * Write a function that takes in the head of a linked list and an integer K, and removes the kth node from the end of the list. The removal should be done in place, the original data structure should be mutated,
 * no new structures should be created.
 *
 * You can assume that the linked list will always have at least two nodes and at least k nodes.
 */

// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeKthNodeFromEnd(head: LinkedList, k: number) {
  let length = 1, iterator : LinkedList = head;
  while (iterator.next !== null) {
    iterator = iterator.next;
    length++;
  }
  iterator = head;
  let counter = 1;
  if (length !== k) { // is not the head we can simply remove from the end
    while (counter < length - k && iterator.next !== null) { // move to the node previous to the one being removed
      iterator = iterator.next;
      counter++;
    }
    const newNext: LinkedList | null = iterator.next!.next;
    iterator.next = newNext;
  } else { // we need to shift the elements by one as it is the head the element to be removed
    head.value = head.next!.value;
    head.next = head.next!.next;
  }
  return head;
}

describe("remove kth node from linked list", () => {
  test("should remove the kth node from the list", () => {
    const head = new LinkedList(0);
    head.next = new LinkedList(1);
    head.next.next = new LinkedList(2);
    head.next.next.next = new LinkedList(3);
    head.next.next.next.next = new LinkedList(4);
    head.next.next.next.next.next = new LinkedList(5);
    head.next.next.next.next.next.next = new LinkedList(6);
    head.next.next.next.next.next.next.next = new LinkedList(7);
    head.next.next.next.next.next.next.next.next = new LinkedList(8);
    head.next.next.next.next.next.next.next.next.next = new LinkedList(9);
    removeKthNodeFromEnd(head, 4);
    let nodes = [],
      iterator: LinkedList | null = head;
    while (iterator !== null) {
      nodes.push(iterator.value);
      iterator = iterator.next;
    }
    expect(nodes.find((n) => n === 6)).toBeFalsy();
  });
  test("should remove the kth node from the list 2", () => {
    const head = new LinkedList(0);
    head.next = new LinkedList(1);
    head.next.next = new LinkedList(2);
    head.next.next.next = new LinkedList(3);
    head.next.next.next.next = new LinkedList(4);
    head.next.next.next.next.next = new LinkedList(5);
    head.next.next.next.next.next.next = new LinkedList(6);
    head.next.next.next.next.next.next.next = new LinkedList(7);
    head.next.next.next.next.next.next.next.next = new LinkedList(8);
    head.next.next.next.next.next.next.next.next.next = new LinkedList(9);
    removeKthNodeFromEnd(head, 1);
    let nodes = [],
      iterator: LinkedList | null = head;
    while (iterator !== null) {
      nodes.push(iterator.value);
      iterator = iterator.next;
    }
    expect(nodes.find((n) => n === 9)).toBeFalsy();
  });
  test("should remove the kth node from the list 3", () => {
    const head = new LinkedList(0);
    head.next = new LinkedList(1);
    head.next.next = new LinkedList(2);
    head.next.next.next = new LinkedList(3);
    head.next.next.next.next = new LinkedList(4);
    head.next.next.next.next.next = new LinkedList(5);
    head.next.next.next.next.next.next = new LinkedList(6);
    head.next.next.next.next.next.next.next = new LinkedList(7);
    head.next.next.next.next.next.next.next.next = new LinkedList(8);
    head.next.next.next.next.next.next.next.next.next = new LinkedList(9);
    removeKthNodeFromEnd(head, 10);
    let nodes = [],
      iterator: LinkedList | null = head;
    while (iterator !== null) {
      nodes.push(iterator.value);
      iterator = iterator.next;
    }
    console.log(nodes)
    expect(nodes.find((n) => n === 0)).toBeFalsy();
  });
});
