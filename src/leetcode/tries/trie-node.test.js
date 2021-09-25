/*
Need to also mark the end of a word, as well as a potential prefix;
*/
class Trie {
  children = new Map();
  end = false;
  value = "";

  constructor(value) {
    this.value = value;
  }

  insert(word) {
    // need to recursively create and insert every children
    let i = 0;
    let node = this;
    while (i < word.length) {
      let char = word[i];
      // move node to the next char, create it if necessary.
      if (node.children.has(char)) {
        node = node.children.get(char);
      } else {
        // need to create the children and add it to the nodes
        const newNode = new Trie(char);
        node.children.set(char, newNode);
        node = newNode;
      }
      i++;
      if (i === word.length) node.end = true;
    }
  }

  search(word) {
    if (word.length === 0) return true;
    let i = 0;
    let node = this;
    while (i < word.length) {
      const char = word[i];
      if (!node.children.has(char)) return false; // if the char doesn't exists
      node = node.children.get(char); // make it the next one.
      i++;
    }

    return node.end;
  }

  startsWith(prefix) {
    let i = 0;
    let node = this;
    while (i < prefix.length) {
      const char = prefix[i];
      // console.log(char, node);
      if (!node.children.has(char)) return false;
      node = node.children.get(char);
      i++;
    }

    return true;
  }
}

const trie = new Trie();
trie.insert("apple");
