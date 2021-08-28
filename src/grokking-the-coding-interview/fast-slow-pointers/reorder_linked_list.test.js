/*
Rearrange a LinkedList (medium)#
Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

Your algorithm should not use any extra space and the input LinkedList should be modified in-place.

Example 1:

Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 
Example 2:

Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
Output: 2 -> 10 -> 4 -> 8 -> 6 -> null

*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    console.log(result);
  }
}

const reorder = function (head) {
  head.print_list();
  // get from middle onwards
  let length = 1;
  let iterator = head;
  while (iterator.next !== null) {
    length++;
    iterator = iterator.next;
  }
  console.log("length", length);

  const halfway = Math.floor(length / 2);
  let nextHead = null;
  // get second part of the list
  iterator = head;
  for (let i = 0; i < halfway - 1; i++) iterator = iterator.next;
  nextHead = iterator.next;
  iterator.next = null;

  const reversed = reverseList(nextHead);
  console.log("head");
  head.print_list();
  console.log("reversed");
  reversed.print_list();

  let l1 = head,
    l2 = reversed,
    preHead = new Node(null);
  iterator = preHead;
  // either they are the same length, or the second list is one short
  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      console.log("l1 null", iterator, l2);
      iterator.next === l2;
      break;
    } else if (l2 === null) {
      iterator.next = l1;
      break;
    } else {
      // need to put 1 from each
      const l1Next = l1.next;
      const l2Next = l2.next;
      l1.next = null;
      l2.next = null;
      iterator.next = l1;
      iterator.next.next = l2;
      iterator = iterator.next.next;
      l1 = l1Next;
      l2 = l2Next;
    }
  }

  return preHead.next;
};

function reverseList(head) {
  let prev = null,
    current = head;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
head.next.next.next.next.next.next = new Node(14);
reorder(head);
head.print_list();

/*
Reflection:
- There is an easier way to get the side of the array that I need to switch
let fast = head, slow = head;
while (fast.next !== null || fast !== null) {
  slow = slow.next;
  fast = fast.next.next;
}
- I did a better job counting the nodes this time, including the length;
- Could be useful to write tests with more examples? Although not sure it would be a great use of time
*/
