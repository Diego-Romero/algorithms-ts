/*
Palindrome LinkedList (medium)#
Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

Example 1:

Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
- get length
- have a fast and slow pointer, the slow moves 1+ and fast moves length - iteration
 
Output: true
Example 2:

Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
Output: false
*/

// assuming that we wont get null as a head, if is only head return true;
const is_palindromic_linked_list = function (head) {
  let length = 1;
  let iterator = head;
  while (iterator.next !== null) {
    iterator = iterator.next;
    length++;
  }
  console.log(length);
  // if even, need to reverse from half
  iterator = head;
  for (let i = 0; i < Math.ceil(length / 2) - 1; i++) iterator = iterator.next;
  const next = iterator.next;
  iterator.next = null;
  const reversed = reverseList(next);

  if (length % 2 === 0) {
    return compareLists(head, reversed); // lists will be same length
  } else {
    compareLists(head, reversed.next);
  }

  function compareLists(list1, list2) {
    let i1 = list1,
      i2 = list2;
    while (i1 !== null) {
      if (i1.value !== i2.value) return false;
      i1 = i1.next;
      i2 = i2.next;
    }

    return true;
  }
};

/*
Reflection:
- Need to be able to count the indexes well
- Should know by heart how to reverse a linked list
- Need to think about other ways of splitting the problem, perhaps today I'm just a little bit tired
*/

const reverseList = (head) => {
  let prev = null,
    current = head;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// head = new Node(2);
// head.next = new Node(4);
// head.next.next = new Node(6);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(2);

// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

// head.next.next.next.next.next = new Node(2);
// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

function printList(head) {
  let result = "";
  let iterator = head;
  while (iterator !== null) {
    result += `${iterator.value} ->`;
    iterator = iterator.next;
  }

  return result;
}

describe("reverse linked list", () => {
  test("should reverse", () => {
    head = new Node(2);
    head.next = new Node(4);
    head.next.next = new Node(6);
    head.next.next.next = new Node(8);
    head.next.next.next.next = new Node(10);
    const newHead = reverseList(head);
    console.log(printList(newHead));
  });
});

describe("is palindromic linked list", () => {
  test("should work with odd", () => {
    head = new Node(2);
    head.next = new Node(4);
    head.next.next = new Node(6);
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(2);
    const result = is_palindromic_linked_list(head);
    expect(result).toBeTruthy();
  });
  test("should work with even", () => {
    head = new Node(2);
    head.next = new Node(4);
    head.next.next = new Node(6);
    head.next.next.next = new Node(6);
    head.next.next.next.next = new Node(4);
    head.next.next.next.next.next = new Node(2);
    const result = is_palindromic_linked_list(head);
    expect(result).toBeTruthy();

    console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);
  });
  test("should work when falsy", () => {
    head = new Node(2);
    head.next = new Node(4);
    head.next.next = new Node(6);
    head.next.next.next = new Node(6);
    head.next.next.next.next = new Node(4);
    head.next.next.next.next.next = new Node(2);
    head.next.next.next.next.next.next = new Node(2);
    const result = is_palindromic_linked_list(head);
    expect(result).toBeFalsy();
  });
});
