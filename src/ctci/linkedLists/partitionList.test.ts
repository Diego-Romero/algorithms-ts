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
	assumptions:
	- head has to be a valid list
	- can return a new set of nodes
 */
export function partitionList(head: LinkedList, value: number): LinkedList {
  let smHead: LinkedList | null = null;
  let smIterator: LinkedList | null = null;
  let lgHead: LinkedList | null = null;
  let lgIterator: LinkedList | null = null;
  let iterator: LinkedList | null = head;

  while (iterator !== null) {
    console.log(iterator.value);
    if (iterator.value < value) {
      if (smHead === null) {
        smHead = new LinkedList(iterator.value);
        smIterator = smHead;
      } else {
        smIterator!.next = new LinkedList(iterator.value);
        smIterator = smIterator!.next;
      }
    } else {
      if (lgHead === null) {
        lgHead = new LinkedList(iterator.value);
        lgIterator = lgHead;
      } else {
        lgIterator!.next = new LinkedList(iterator.value);
        lgIterator = lgIterator!.next;
      }
    }
    iterator = iterator.next;
  }
  if (smHead === null) return lgHead as LinkedList;
  smIterator!.next = lgHead;
  return smHead;
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

describe("partition linked list", () => {
  test("partition around 5", () => {
    const head = new LinkedList(10);
    head.next = new LinkedList(2);
    head.next.next = new LinkedList(1);
    head.next.next.next = new LinkedList(5);
    head.next.next.next.next = new LinkedList(5);
    head.next.next.next.next.next = new LinkedList(4);
    head.next.next.next.next.next.next = new LinkedList(22);
    head.next.next.next.next.next.next.next = new LinkedList(30);

    const result = partitionList(head, 5);
    console.log(printList(result));
  });
});
