// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function linkedListPalindrome(head: LinkedList) {
  let list = [];
  let iterator: LinkedList | null = head;
  while (iterator !== null) {
    list.push(iterator.value)
    iterator = iterator.next;
  }
	let left = 0, right = list.length - 1;
	while (left < right) {
		if (list[left] !== list[right]) return false;
		else {
			left++;
			right--;
		}
	}

  return true;
}
