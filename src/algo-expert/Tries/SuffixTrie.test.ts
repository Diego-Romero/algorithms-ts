interface TrieNode {
  [key: string]: TrieNode | boolean;
}

export class SuffixTrie {
  root: TrieNode;
  endSymbol: string;

  constructor(string: string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  // O(N ^ 2) time | space
  populateSuffixTrieFrom(string: string) {
    // O(N) time | space loop
    for (let i = 0; i < string.length; i++) {
      const substring = string.substring(i, string.length);
      this.insertString(substring, 0, this.root);
    }
  }

  // whilst we can insert a char in the current node insert, once we reach the end if there are no other keys, mark it as the end
  insertString(string: string, index: number, node: TrieNode) {
    if (index >= string.length) {
      node[this.endSymbol] = true;
    } else {
      const char = string[index];
      if (!node[char]) node[char] = {};
      this.insertString(string, index + 1, node[char] as TrieNode);
    }
  }

  contains(string: string): boolean {
    let current: TrieNode = this.root;

    for (let i = 0; i <= string.length; i++) {
      if (i === string.length) {
        if (current[this.endSymbol]) return true;
        return false;
      }
      const char = string[i];
      if (current[char]) current = current[char] as TrieNode;
      else return false;
    }
    return false;
  }
}

describe("suffix trie", () => {
  test("should work with babc", () => {
    const trie = new SuffixTrie("babc");
    expect(trie.contains("abc")).toBeTruthy();
    expect(trie.contains("babc")).toBeTruthy();
    expect(trie.contains("abc")).toBeTruthy();
    expect(trie.contains("abcc")).toBeFalsy();
    expect(trie.contains("z")).toBeFalsy();
  });
  test("should work with test", () => {
    const trie = new SuffixTrie("test");
    expect(trie.contains("est")).toBeTruthy();
    expect(trie.contains("test")).toBeTruthy();
    expect(trie.contains("st")).toBeTruthy();
    expect(trie.contains("t")).toBeTruthy();
    expect(trie.contains("tes")).toBeFalsy();
  });
  test("should work with a big string", () => {
    const trie = new SuffixTrie("this is a big string");
    expect(trie.contains("string")).toBeTruthy();
    expect(trie.contains("yo")).toBeFalsy();
  });
});
