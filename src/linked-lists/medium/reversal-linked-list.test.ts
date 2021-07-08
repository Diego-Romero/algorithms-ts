/**
 * Reverse a link list without using any extra memory
 */

// This is an input class. Do not edit.
class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function reverseLinkedList(head: LinkedList) {
  let iterator: LinkedList = head, start: LinkedList = head; 

  while (iterator.next !== null) {
    const next = iterator.next;
    iterator.next = next.next;
    next.next = start;
    start = next;
  }

  return start;
}

describe('reverse linked list', () => {
  test('should reverse it', () => {
    const head = new LinkedList(1);
    head.next = new LinkedList(2);
    head.next.next = new LinkedList(3);
    head.next.next.next = new LinkedList(4);
    head.next.next.next.next = new LinkedList(5);
    expect(getOrder(head)).toEqual("12345")
    const newHead = reverseLinkedList(head)
    expect(getOrder(newHead)).toEqual("54321")
  })
   test("should reverse it 2", () => {
     const head = new LinkedList(1);
     head.next = new LinkedList(2);
     const newHead = reverseLinkedList(head);
     expect(getOrder(newHead)).toEqual("21");
   });  
})

function getOrder(node: LinkedList): string {
  let result = "";
  let i: LinkedList = node;
  while (i.next !== null) {
    console.log(i.value)
    result += i.value;
    i = i.next;
  }
  result += i.value;
  return result;
}
