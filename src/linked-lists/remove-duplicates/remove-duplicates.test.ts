import { LinkedList } from "./remove-duplicates"


describe('linked list remove duplicates', () => {
 test('should not include any duplicates in the list', () => {
   const head = new LinkedList(1)
   head.next = new LinkedList(1)
   head.next.next = new LinkedList(2)
   head.next.next.next = new LinkedList(4)
   head.next.next.next.next = new LinkedList(4)
   head.next.next.next.next.next = new LinkedList(4)
   head.next.next.next.next.next.next = new LinkedList(6)
   head.next.next.next.next.next.next.next = new LinkedList(6)
   head.next.next.next.next.next.next.next.next = new LinkedList(7)
 })
})
