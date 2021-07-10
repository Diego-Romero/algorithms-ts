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
   1 - 2 - 2 - 2 - 3 - 3
  */

  export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
    let iterator: LinkedList | null = linkedList;

    while (iterator !== null && iterator.next !== null) {
      if (iterator.next.value === iterator.value) {
        let next: LinkedList | null = iterator.next;

        while (next.next !== null && next.next.value === iterator.value) {
          // move next until its next value is diff
          next = next.next;
        }
        iterator.next = next.next;
        iterator = iterator.next;
      } else iterator = iterator.next;
    }
    // Write your code here.
    return linkedList;
  }
