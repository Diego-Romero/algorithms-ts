/*
Problem Statement#
There is a dictionary containing words from an alien language for which we don’t know the ordering of the alphabets. Write a method to find the correct order of the alphabets in the alien language. It is given that the input is a valid dictionary and there exists an ordering among its alphabets.

Example 1:

Input: Words: ["ba", "bc", "ac", "cab"]
Output: bac
Explanation: Given that the words are sorted lexicographically by the rules of the alien language, so
from the given words we can conclude the following ordering among its characters:

1. From "ba" and "bc", we can conclude that 'a' comes before 'c'.
2. From "bc" and "ac", we can conclude that 'b' comes before 'a'

From the above two points, we can conclude that the correct character order is: "bac"
Example 2:

Input: Words: ["cab", "aaa", "aab"]
Output: cab
Explanation: From the given words we can conclude the following ordering among its characters:

1. From "cab" and "aaa", we can conclude that 'c' comes before 'a'.
2. From "aaa" and "aab", we can conclude that 'a' comes before 'b'

From the above two points, we can conclude that the correct character order is: "cab"
Example 3:

Input: Words: ["ywx", "wz", "xww", "xz", "zyy", "zwz"]
Output: ywxz
Explanation: From the given words we can conclude the following ordering among its characters:

1. From "ywx" and "wz", we can conclude that 'y' comes before 'w'.
2. From "wz" and "xww", we can conclude that 'w' comes before 'x'.
3. From "xww" and "xz", we can conclude that 'w' comes before 'z'
4. From "xz" and "zyy", we can conclude that 'x' comes before 'z'
5. From "zyy" and "zwz", we can conclude that 'y' comes before 'w'

From the above five points, we can conclude that the correct character order is: "ywxz"
*/

const find_order = function (words) {
  // need to have a sort of greedy approach, need to compare the first different character between two consecutive words
  const adjacent = {};
  const counts = {};
  const order = [];
  const chars = new Set();
  for (let word of words) {
    for (let char of word.split("")) chars.add(char);
  }

  chars.forEach((char) => {
    adjacent[char] = [];
    counts[char] = 0;
  });

  // can only find one dependency per pair of words
  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const current = words[i];
    const minLength = Math.min(prev.length, current.length);

    for (let j = 0; j < minLength; j++) {
      const prevChar = prev[j];
      const curChar = current[j];
      if (prevChar !== curChar) {
        // spotted the difference
        adjacent[prevChar].push(curChar);
        counts[curChar] += 1;
      }
    }
  }

  // BFS for topological sort
  const queue = [];
  console.log(adjacent);
  console.log(counts);

  for (let [k, v] of Object.entries(counts)) {
    if (v === 0) queue.push(k);
  }
  console.log(queue);

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      order.push(node);
      console.log(node, adjacent[node]);
      const children = adjacent[node];
      children.forEach((child) => {
				console.log('child', child)
        counts[child] -= 1;
        if (counts[child] === 0) queue.push(child);
      });
    }
  }
  console.log(order);

  return order.join("");
};

console.log(`Character order: ${find_order(["ba", "bc", "ac", "cab"])}`);
// bac
// console.log(`Character order: ${find_order(["cab", "aaa", "aab"])}`); // cab
// console.log(
//   `Character order: ${find_order(["ywx", "wz", "xww", "xz", "zyy", "zwz"])}`
// ); // wyxz
