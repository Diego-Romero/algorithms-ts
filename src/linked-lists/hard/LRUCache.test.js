// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.

// construct a linked list to keep track of the last value
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.values = {};
    this.preHead = new Node(0);
    this.last = null;
    this.length = 0;
  }

  insertKeyValuePair(key, value) {
    if (this.length === this.maxSize) {
      // we need to evict the least recently used
      const evict = this.preHead.next;
      delete this.values[evict.value];
      this.preHead.next = this.preHead.next.next;
    } else {
      this.length += 1;
    }

    this.values[key] = value;
    // insert the next node
    const node = new Node(key);
    if (this.preHead.next === null) {
      this.preHead.next = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
  }

  getValueFromKey(key) {
    if (!this.values[key]) return null;
    // put the current key at the end of the list if is not already
    if (this.last !== null && this.last.value !== key) {
      this.last.next = new Node(key);
      this.last = this.last.next;
      this.preHead.next = this.preHead.next.next;
    }
  }

  getMostRecentKey() {
    if (this.last === null) return null;
    return this.values[this.last.value];
  }
}

exports.LRUCache = LRUCache;

const cache = new LRUCache(3);
console.log(cache.getMostRecentKey()); // null
cache.insertKeyValuePair(1, 1);
cache.insertKeyValuePair(2, 2);
cache.insertKeyValuePair(3, 3);

console.log(cache.getMostRecentKey()); // 3
cache.insertKeyValuePair(4, 4);
console.log(cache.getMostRecentKey()); // 4
console.log(cache.getValueFromKey(1)); // null
cache.getValueFromKey(3);
cache.getValueFromKey(1);
console.log(cache.getMostRecentKey()); // 3
