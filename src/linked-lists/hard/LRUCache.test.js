/*
Might be able to solve this using a ordered hash map
*/
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// create the data structures
// work on inserting
// work on get value
// get most recent key should just give the head of the list, if it exists
class LRUCache {
  constructor(maxSize) {
    if (maxSize < 1) throw Error("");
    this.maxSize = maxSize || 1;
    this.preHead = new Node(null, null);
    this.tail = null;
    this.map = {};
  }

  insertKeyValuePair(key, value) {
    // check if it exists
    const node = this.map[key];
    if (node) {
      console.log("it exists", node.key, node.value);
      node.value = value;
      this.setNewHead(node);
    } else {
      // insert a new one
      const node = new Node(key, value);
      this.insertNodeToList(node);
      this.map[key] = node;
      console.log("inserted", Object.keys(this.map), this.printList());
    }
  }

  insertNodeToList(node) {
    // check if we are over the max size
    const currentLength = Object.keys(this.map).length;
    if (currentLength === this.maxSize) this.removeTailFromList();
    const next = this.preHead.next; // at the start is null
    if (next !== null) {
      node.next = next;
      next.prev = node;
    } else {
      this.tail = node;
    }

    this.preHead.next = node;
    node.prev = this.preHead;
  }

  // I know that at this point the amount of node values will be bigger or equal 1
  // 2 cases, more than 2 nodes, or just one
  removeTailFromList() {
    const last = this.tail.key;
    delete this.map[last];
    const prev = this.tail.prev;
    if (prev.value === null) this.tail = null;
    // if prev is preHead
    else {
      this.tail = prev;
      prev.next = null;
    }
    console.log("deleted", Object.keys(this.map), this.printList());
  }

  printList() {
    let result = "";
    let i = this.preHead.next;
    while (i !== null) {
      result += i.value;
      i = i.next;
    }
    return result;
  }

  // need to re order
  getValueFromKey(key) {
    const node = this.map[key];
    if (node) {
      // re order the nodes
      this.setNewHead(node);
      return this.map[key].value;
    }

    return null;
    // Write your code here.
  }

  // different test cases, we could not have next, but we will always have prev
  setNewHead(node) {
    // we will have a prev and next
    // if the previous one is the preHead, don't do anything
    if (!this.isPrevPreHead(node)) {
      // need to know if is a middle node, or the last one
      if (node.next === null) {
        // last node
        node.prev.next = null;
      } else {
        // its a middle node
        const prev = node.prev;
        prev.next = node.next;
        node.next.prev = prev;
      }
      // inserting the node as the new head now
      const next = this.preHead.next;
      this.preHead.next = node;
      node.prev = this.preHead;
      // tie the rest of the list
      next.prev = node;
      node.next = next;
    }
  }

  isPrevPreHead(node) {
    if (node.prev.value === null) return true;
    return false;
  }

  getMostRecentKey() {
    const next = this.preHead.next;
    if (next) {
      return next.key;
    }
    return null;
  }
}

// Do not edit the line below.
exports.LRUCache = LRUCache;

const cache = new LRUCache(3);

cache.insertKeyValuePair(1, "a");
cache.insertKeyValuePair(2, "b");
cache.insertKeyValuePair(3, "c");
cache.insertKeyValuePair(4, "d"); // this should a remove a from the end
console.log(cache.getValueFromKey(1)); // null
cache.insertKeyValuePair(2, "B");
console.log(cache.getMostRecentKey()); // 2
console.log(cache.getValueFromKey(2)); // B // as we updated
console.log(cache.getValueFromKey(3)); // c
console.log(cache.getMostRecentKey()); // 3

// check that it also removes the least used key
