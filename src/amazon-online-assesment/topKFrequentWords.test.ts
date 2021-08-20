function topKFrequent(words: string[], k: number): string[] {
  // need to create a frequency map of the words
  const map = new Map<string, number>();
  words.forEach((word) => {
    map.set(word, map.has(word) ? map.get(word)! + 1 : 1);
  });

  const frequency: [string, number][] = Array.from(map.entries());
  frequency.sort((a, b) => a[0].localeCompare(b[0]));
  frequency.sort((a, b) => b[1] - a[1]);

  return frequency.map((w) => w[0]).slice(0, k);
}

describe("top k frequent words", () => {
  test("should work with a basic example", () => {
    const words = ["i", "love", "leetcode", "i", "love", "coding"],
      k = 2;
    const result = ["i", "love"];
    expect(topKFrequent(words, k)).toEqual(result);
  });
  test("should work with a more complex example", () => {
    const words = [
        "the",
        "day",
        "is",
        "sunny",
        "the",
        "the",
        "the",
        "sunny",
        "is",
        "is",
      ],
      k = 4;
    const result = ["the", "is", "sunny", "day"];
    expect(topKFrequent(words, k)).toEqual(result);
  });
});
