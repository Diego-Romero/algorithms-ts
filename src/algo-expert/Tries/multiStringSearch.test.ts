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
        return true;
      }
      const char = string[i];
      if (current[char]) current = current[char] as TrieNode;
      else return false;
    }
    return false;
  }
}

export function multiStringSearch(bigString: string, smallStrings: string[]) {
  const trie = new SuffixTrie(bigString);
  console.log(JSON.stringify(trie.root));
  let result: boolean[] = [];
  for (let string of smallStrings) result.push(trie.contains(string));
  return result;
}

describe("Multi String Search", () => {
  test("should work", () => {
    const search = multiStringSearch("this is a big string", [
      "this",
      "yo",
      "this is a big string",
    ]);
    expect(search).toEqual([true, false, true]);
  });
});
