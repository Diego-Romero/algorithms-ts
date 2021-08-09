// O(W*C) time | space, where W is each word and C is the characters of the longest word
type FrequencyMap = { [type: string]: number };
export function minimumCharactersForWords(words: string[]) {
  const result: string[] = [];
  const map: FrequencyMap = {};

  for (let word of words) {
    const current: FrequencyMap = {};
    for (let char of word.split("")) {
      if (current[char]) current[char]++;
      else current[char] = 1;
    }
    console.log(current);
    for (let [key, value] of Object.entries(current)) {
      if (map[key]) {
        map[key] = Math.max(map[key], value);
      } else {
        map[key] = value;
      }
    }
  }
  for (let [key, value] of Object.entries(map)) {
    for (let i = 0; i < value; i++) result.push(key);
  }
  // Write your code here.
  return result;
}

describe("minimun characters for words", () => {
  test("should work", () => {
    const array = ["this", "that", "did", "deed", "them!", "a"];
    console.log(minimumCharactersForWords(array));
  });
});

/**
["this", "that", "did", "deed", "them!", "a"]
[t, h, i, s, a, t, d, d, e, e, m, !]
// need to find a way to compare 2 word frequency maps
// need to keep updating to the second map, the highest number from the current map
{
	t: 1,
	h: 1,
	i: 1,
	s: 1,
	a: 1,
}


Write a function that will take an array of words and returns the smallest array of characters needed to form all the words

brute force solution:
- iterate through all the words, put the chars in a set, return the letters in the set
O(W * M) time and space, W is words and M is the number of chars in the longest word


*/
