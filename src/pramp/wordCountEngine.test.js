/**
We have to do a frequency count split that respects the insertion order.
Then we need to grab all the elements and sort them by their freqency
- Whilst doing these we need to make sure that we are cleaning up each word:
  - needs to be lower cae
  - remove all punctuation from the word
  
  
{
  practice: 3,
  makes: 1, 
  perfect 2,
  youll: 1,
  only: 1, 
  get: 1, 
}
*/

// O(W log W * (W * C)) time && (W * C) space, where W is every word in the document and C is the longest amount of chars out of all the words.
function wordCountEngine(document) {
  const frequencyMap = new Map(); // using a map as it preserves insertion order
  const words = document.split(" ");
  // O(N) time | space, where N is the amount of words
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // create the frequency map
    const clean = cleanWord(word.toLowerCase());
    if (clean !== "") {
      if (!frequencyMap.has(clean)) frequencyMap.set(clean, [0, i]); // this will always contain the min index at which they appear.
      const [frequency, index] = frequencyMap.get(clean);
      frequencyMap.set(clean, [frequency + 1, index]);
    }
  }
  const result = [];
  for (let [key, value] of frequencyMap) {
    const [frequency, index] = value;
    result.push([key, frequency, index]);
  }
  // can I sort first by the order in which they appear and then by frequency
  result.sort((a, b) => b[1] - a[1]); // sort by frequency
  console.log(result);
  return result.map((w) => [w[0], w[1].toString()]);
}

// O(W) time | space, where W is the length of the word
function cleanWord(word) {
  const punctuation = new Set([",", ".", "?", "!", "'", '"', ":", ";"]);
  let result = "";
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!punctuation.has(char)) result += char;
  }
  return result;
}

describe("word count engine", () => {
  test("should work with basic punctuation", () => {
    const document =
      "Practice makes perfect. you'll only get Perfect by practice. just practice!";
    const output = [
      ["practice", "3"],
      ["perfect", "2"],
      ["makes", "1"],
      ["youll", "1"],
      ["only", "1"],
      ["get", "1"],
      ["by", "1"],
      ["just", "1"],
    ];
    expect(wordCountEngine(document)).toEqual(output);
  });
  test("it should work with all types of punctuation", () => {
    const document = "To be, or not to be, that is the question:";
    const output = [
      ["to", "2"],
      ["be", "2"],
      ["or", "1"],
      ["not", "1"],
      ["that", "1"],
      ["is", "1"],
      ["the", "1"],
      ["question", "1"],
    ];
    expect(wordCountEngine(document)).toEqual(output);
  });

  test("it should work when there is white spaces", () => {
    const document =
      "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. ";
    const output = [
      ["and", "4"],
      ["every", "3"],
      ["is", "3"],
      ["a", "3"],
      ["quotation", "3"],
      ["all", "2"],
      ["book", "1"],
      ["house", "1"],
      ["out", "1"],
      ["of", "1"],
      ["forests", "1"],
      ["mines", "1"],
      ["stone", "1"],
      ["quarries", "1"],
      ["man", "1"],
      ["from", "1"],
      ["his", "1"],
      ["ancestors", "1"],
    ];

    const result = wordCountEngine(document);
    console.table(output);
    console.table(result);
    expect(result).toEqual(output);
  });
  test("it should work with a different document", () => {
    const document =
      "I have failed over and over and over again in my life and that is why I succeed.";
    const output = [
      ["over", "3"],
      ["and", "3"],
      ["i", "2"],
      ["have", "1"],
      ["failed", "1"],
      ["again", "1"],
      ["in", "1"],
      ["my", "1"],
      ["life", "1"],
      ["that", "1"],
      ["is", "1"],
      ["why", "1"],
      ["succeed", "1"],
    ];

    const result = wordCountEngine(document);
    expect(result).toEqual(output);
  });
  test("it should work with a different document 2", () => {
    const document =
      "Look If you had One shot, Or one opportunity, To seize everything you ever wanted, In one moment, Would you capture it, Or just let it slip?";
    const output = [
      ["you", "3"],
      ["one", "3"],
      ["or", "2"],
      ["it", "2"],
      ["look", "1"],
      ["if", "1"],
      ["had", "1"],
      ["shot", "1"],
      ["opportunity", "1"],
      ["to", "1"],
      ["seize", "1"],
      ["everything", "1"],
      ["ever", "1"],
      ["wanted", "1"],
      ["in", "1"],
      ["moment", "1"],
      ["would", "1"],
      ["capture", "1"],
      ["just", "1"],
      ["let", "1"],
      ["slip", "1"],
    ];

    const result = wordCountEngine(document);
    console.table(output);
    console.table(result);
    expect(result).toEqual(output);
  });
});
