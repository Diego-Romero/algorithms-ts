// O(N) time | space
export function reverseWordsInString(string: string) {
  let words: string[] = [];

  let countingSpaces = string[0] === " ";
  let prev = 0;
  let i: number;
  for (i = 1; i < string.length; i++) {
    if (countingSpaces && string[i] !== " ") {
      // if we are counting spaces and we find a letter, push the space amount
      words.push(string.substring(prev, i));
      prev = i;
      countingSpaces = false;
    }
    if (!countingSpaces) {
      if (string[i] === " ") {
        // push word
        words.push(string.substring(prev, i));
        prev = i;
        countingSpaces = true;
      }
      // else if we have a word we just move to the next one
    }
  }
  words.push(string.substring(prev, i));
  console.log(words);
  let result = "";
  for (let j = words.length - 1; j >= 0; j--) {
    result += words[j];
  }

  return result;
}

/**
- the words have different length of white spaces
- need to find a way to separate the different words

" testing space"
"space testing "
"diego is such a good guy right"
[diego, ' ', is, ' ', such, ' ', a, ' ', good, ]
"right guy good a such is diego"

"tim is great"
"great is tim"

"whitespace    4"
['whitespace', '   ', '4']
"4    whitespace"

*/
