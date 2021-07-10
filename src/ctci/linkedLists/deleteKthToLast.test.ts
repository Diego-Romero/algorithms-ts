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
  let length = 1;
  let iterator: LinkedList | null = head;
  while (iterator.next !== null) {
    iterator = iterator.next;
    length++;
  }

  const diff = length - k;
  if (diff === 0 && head.next !== null) head = head.next;
  else {
    iterator = head;
    for (let i = 0; i < diff - 1; i++) {
      if (iterator.next !== null) iterator = iterator.next; // moving to one before the desired node to be deleted
    }
    if (iterator.next !== null) iterator.next = iterator.next.next;
    else iterator.next = null;
  }

  return head;
}
