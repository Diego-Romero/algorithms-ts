/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  // create recursive call, that swaps the head with the next one, in case there is one
  if (head === null) return head;

  function helper(node: ListNode): ListNode {
    if (node.next !== null) {
      // swap head with next
      const next = node.next;
      node.next = next.next;
      next.next = node;
      if (node.next !== null) {
        node.next = helper(node.next);
      }
      return next;
    }
    return node;
  }

  return helper(head);
}
