/*
There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.

 

Example 1:

Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"
Example 2:

Input: words = ["z","x"]
Output: "zx"
Example 3:

Input: words = ["z","x","z"]
Output: ""
Explanation: The order is invalid, so return "".
*/

/**
 * @param {string[]} words
 * @return {string}
 */
const alienOrder = function (words) {
  /*
	First need to find in which order the words go, 
	in order to do this, I need to find the first different letter between the two.
	*/
  const inbound = new Map(),
    outbound = new Map();
  getLetters(words, inbound, outbound);
  console.log(inbound, outbound);
  populateMaps(words, inbound, outbound);

  const queue = [];
  for (let [k, v] of inbound.entries()) {
    if (v === 0) queue.push(k);
  }
  if (queue.length === 0) return ""; // there is no possible way, there is a cycle.

  const order = [];
  // Topological sorting
  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      order.push(node);
      const children = outbound.get(node);
      for (let child of children) {
        inbound.set(child, inbound.get(child) - 1);
        if (inbound.get(child) === 0) queue.push(child);
      }
    }
  }

  // check if there is still an unvisited character
  for (let v of inbound.values()) {
    if (v !== 0) return "";
  }

  return order.join("");
};

/**
 * From each word we can deduce that one letter is before the other.
 * This is because
 */
function populateMaps(words, inbound, outbound) {
  for (let i = 0; i < words.length - 1; i++) {
    const current = words[i];
    const next = words[i + 1];
    const [source, target] = getFirstDiffChar(current, next);
    if (source !== "") {
      inbound.set(target, inbound.get(target) + 1);
      const array = outbound.get(source);
      array.push(target);
    }
  }
}

function getFirstDiffChar(current, next) {
  let source = "",
    target = "";
  for (let j = 0; j < current.length; j++) {
    const c1 = current[j],
      c2 = next[j];
    if (c1 !== c2) {
      source = c1;
      target = c2;
      break;
    }
  }

  return [source, target];
}

// find all unique letters and add them to our set
function getLetters(words, inbound, outbound) {
  // need to get all the possible letters from all the words
  const set = new Set();
  for (let word of words) {
    for (let char of word.split("")) {
      set.add(char);
    }
  }

  for (let char of Array.from(set)) {
    inbound.set(char, 0);
    outbound.set(char, []);
  }
}

const words = ["wrt", "wrf", "er", "ett", "rftt"];
// console.log(alienOrder(words)); // WERTF
console.log(alienOrder(["z", "z"])); // WERTF
