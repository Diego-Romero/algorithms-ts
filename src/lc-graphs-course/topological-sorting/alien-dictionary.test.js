/**
 * This problem requires us to find the topological order between words.
 * The list provided includes the words sorted by that alien language order.
 * for example 'ba' and 'bc' we know that a comes before c, as they are the first different letter.
 *
 * Questions:
 * - could we receive an empty list?
 * - what if we only have one word?
 * - Could we receive a word with just one letter? What should we do in that case? Assume that words will have a length of more than one.
 * - We can receive two words that will indicate the same thing, for example that a -> b, be careful not creating 2 different associations, they are unique each.
 * - Assuming that all words will have a length
 *
 * Steps:
 * - Write a function that takes two words and finds the first different character between them, if there is none return empty string.
 * - Store those characters in a set to keep uniqueness amongst them
 * - Once we have the associations start doing topological sort between them.
 *
 * Examples;
 *
 */

const find_order = function (words) {
  // store all unique relationships that we have.
  const edges = new Set();
  for (let i = 0; i < words.length - 1; i++) {
    const relation = firstDiffChar(words[i], words[i + 1]);
    if (relation.length === 2) edges.add(relation);
  }

  console.log(edges); // [yw, wx, wz, xz, yw]
  const graph = {},
    counts = {};
  for (let string of edges.values()) {
    const node = string[0];
    const target = string[1];
    // initialize them if they don't exist, all of them - otherwise we could get null pointers | undefined.
    if (!graph[node]) graph[node] = [];
    if (!graph[target]) graph[target] = [];
    if (!counts[node]) counts[node] = 0;
    if (!counts[target]) counts[target] = 0;
    // set the correct values for topological sort
    graph[node].push(target);
    counts[target]++;
  }
  /*
  graph: { y: [w], w: [x, z], x: [z]}, counts: {y: 0, w: 1, x: 1, z: 2};
  */

  // initialize the queue for topological sort
  const queue = []; // [y]
  for (let [k, v] of Object.entries(counts)) {
    if (v === 0) queue.push(k);
  }

  let result = "";
  while (queue.length > 0) {
    const length = queue.length; // 1
    for (let i = 0; i < length; i++) {
      const node = queue.shift(); // y, w
      result += node; // yw
      // need to iterate through all the edges that we have in the graph for this node.
      // and reduce their count value by 1 each time we see one, if the value reaches 0, then put them in the queue
      const edges = graph[node]; // [w], [x, z]
      if (edges) {
        for (let edge of edges) {
          counts[edge]--;
          if (counts[edge] === 0) queue.push(edge);
        }
      }
    }
  }

  return result;
};

// should return a string indicating which letter comes after the next one. If the strings are the same return an empty string
// indicating we couldn't find one.
function firstDiffChar(word1, word2) {
  let p1 = 0,
    p2 = 0;
  while (p1 < word1.length && p2 < word2.length) {
    const c1 = word1[p1],
      c2 = word2[p2];
    if (c1 !== c2) return c1 + c2;
    p1++;
    p2++;
  }

  // it could also be the case that one word is longer than the other
  return "";
}

describe("Alien Dictionary", () => {
  test("should find the correct order", () => {
    expect(find_order(["ba", "bc", "ac", "cab"])).toEqual("bac");
  });
  test("should find the correct order 2", () => {
    expect(find_order(["cab", "aaa", "aab"])).toEqual("cab");
  });
  test("should find the correct order 3", () => {
    expect(find_order(["ywx", "wz", "xww", "xz", "zyy", "zwz"])).toEqual(
      "ywxz"
    );
  });
});
