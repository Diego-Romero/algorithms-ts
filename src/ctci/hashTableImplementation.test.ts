class LinkedListNode {
  next: LinkedListNode | null = null;
  key: string;
  value: any;
  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }

  appendToEndOfList(node: LinkedListNode) {
    let iterator: LinkedListNode = this;
    while (iterator.next !== null) {
      iterator = iterator.next;
    }
    iterator.next = node;
  }

  findValue(key: string): any | null {
    let iterator: LinkedListNode | null = this;
    while (iterator !== null) {
      if (iterator.key === key) return iterator.value;
      iterator = iterator.next;
    }
    return null;
  }
}

class HashTable {
  array: LinkedListNode[] = [];

  set(key: string, value: any) {
    // compute the hash code
    const hash = this.getHash(key);
    const node: LinkedListNode | undefined = this.array[hash];
    const newNode = new LinkedListNode(key, value);
    if (node) {
      node.appendToEndOfList(newNode);
    } else {
      this.array[hash] = newNode;
    }
  }

  get(key: string): any {
    const hash = this.getHash(key);
    const node = this.array[hash];
    return node.findValue(key);
  }

  private getHash(string: string): number {
    return string.length & 10;
  }
}

describe("Hash Table", () => {
  test("hash map", () => {
    const map = new HashTable();
    map.set("diego", "romero");
    map.set("jose", "Sarceno");
    expect(map.get("diego")).toEqual("romero");
    expect(map.get("jose")).toEqual("Sarceno");
    expect(map.get("pepe")).toEqual(null);
  });
});
