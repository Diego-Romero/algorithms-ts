// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

/**
 Assuming that list will always have more than 2 nodes
 Deleting the left one in case of even
 */
export function deleteMiddleNode(head: LinkedList) {
  let length = 1;
  let iterator = head;
  while (iterator.next !== null) {
    iterator = iterator.next;
    length++;
  }

  if (length < 3) return head;
	
  const mid = Math.round(length / 2);
	// console.log('length', length, mid)
	
  // need to iterate to one number before the mid
  iterator = head;
  for (let i = 0; i < mid - 2; i++) {
    if (iterator.next !== null) iterator = iterator.next;
  }
	console.log('iterator', iterator.value)
  if (iterator.next !== null) iterator.next = iterator.next?.next;

  return head;
}

const printList = (node: LinkedList): string => {
  let result = "" + node.value,
    iterator = node;
  while (iterator.next !== null) {
    iterator = iterator.next;
    result += ", " + iterator.value;
  }

  return result;
};

// solution runs in 
describe("delete middle node", () => {
  test("should work with even", () => {
    const head = new LinkedList(1);
    head.next = new LinkedList(2);
    head.next.next = new LinkedList(3);
    head.next.next.next = new LinkedList(4);
    head.next.next.next.next = new LinkedList(5);
    head.next.next.next.next.next = new LinkedList(6);

    const result = deleteMiddleNode(head);
    console.log(printList(result));
  });
  test("should work with odd", () => {
    const head = new LinkedList(1);
    head.next = new LinkedList(2);
    head.next.next = new LinkedList(3);
    head.next.next.next = new LinkedList(4);
    head.next.next.next.next = new LinkedList(5);

    const result = deleteMiddleNode(head);
    console.log(printList(result));
  });
});
