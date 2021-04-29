// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function sumOfLinkedLists(
  one: LinkedList,
  two: LinkedList
): LinkedList | null {
  let result: LinkedList | null = null,
    iterator: LinkedList | null = null;
  let i1: LinkedList | null = one,
    i2: LinkedList | null = two,
    acc: number = 0;
  let i = one;
  while (i !== null) {
    if (i1 === null || i2 === null) break;
    const sum = i1.value + i2.value;
    const newValue = (sum % 10) + acc;
    if (iterator === null) {
      iterator = new LinkedList(newValue);
      result = iterator;
    } else {
      iterator.next = new LinkedList(newValue);
      iterator = iterator.next;
    }
    sum >= 10 ? (acc = 1) : (acc = 0);
    i1 = i1.next;
    i2 = i2.next;
  }
  // console.log("accumulator", acc);

  if (i2 === null) {
    while (i1 !== null) {
      console.log("i1", i1.value, acc);
      const newValue = (i1.value % 10) + acc;
      iterator!.next = new LinkedList(newValue);
      iterator = iterator!.next;
      i1 = i1.next;
      acc = 0;
    }
  }
  if (i1 === null) {
    while (i2 !== null) {
      const newValue = (i2.value % 10) + acc;
      iterator!.next = new LinkedList(newValue);
      iterator = iterator!.next;
      i2 = i2.next;
      acc = 0;
    }
  }
  if (acc === 1) {
    iterator!.next = new LinkedList(1)
  }

  return result;
}

describe("sum of linked list", () => {
  test("should give the right result back", () => {
    const one = new LinkedList(2);
    one.next = new LinkedList(4);
    one.next.next = new LinkedList(7);
    one.next.next.next = new LinkedList(1);

    const two = new LinkedList(9);
    two.next = new LinkedList(4);
    two.next.next = new LinkedList(5);
    const result = sumOfLinkedLists(one, two);
    const resultValue = nodesValue(result as LinkedList);
    expect(resultValue).toEqual(1922);
  });
  test("should give the right result back 2", () => {
    const one = new LinkedList(4);
    one.next = new LinkedList(2);

    const two = new LinkedList(9);
    const result = sumOfLinkedLists(one, two);
    const resultValue = nodesValue(result as LinkedList);
    expect(resultValue).toEqual(33);
  });
  test("should give the right result back 3", () => {
    const one = new LinkedList(9);

    const two = new LinkedList(9);
    two.next = new LinkedList(2);
    const result = sumOfLinkedLists(one, two);
    const resultValue = nodesValue(result as LinkedList);
    expect(resultValue).toEqual(83);
  });
    test("should give the right result back 4", () => {
      const one = new LinkedList(2);
      const two = new LinkedList(9);
      const result = sumOfLinkedLists(one, two);
      const resultValue = nodesValue(result as LinkedList);
      expect(resultValue).toEqual(11);
    });
});

function nodesValue(node: LinkedList): number {
  let value = "",
    iterator: LinkedList | null = node;
  while (iterator !== null) {
    console.log("iterator", iterator.value);
    value += iterator.value;
    iterator = iterator.next;
  }
  return parseInt(value);
}
