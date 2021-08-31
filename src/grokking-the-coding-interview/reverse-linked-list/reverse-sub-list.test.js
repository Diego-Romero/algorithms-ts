class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
}

// assuming that p will always be bigger than 1 and q will always be bigger than p
const reverse_sub_list = function (head, p, q) {
  // separate the list that needs to be reversed, then
  let startNode = head,
    endNode = head;
  let i = 1;
  let iterator = head;
  while (i < q) {
    // need to find start and end of list
    if (i + 1 === p) startNode = iterator;
    iterator = iterator.next;
    i++;
  }
  let listEnd = iterator.next; // the end after the list has been reversed
  iterator.next = null;
  reverseList(startNode.next);
  startNode.next = iterator;
  while (iterator.next !== null) iterator = iterator.next;
  iterator.next = listEnd;

  return head;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(
  `Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`
);
