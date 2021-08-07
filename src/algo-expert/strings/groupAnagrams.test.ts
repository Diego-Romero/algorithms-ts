export function groupAnagrams(words: string[]) {
  const anagrams: { [key: string]: string[] } = {};
  for (const word of words) {
    const sorted = word.split("").sort().join("");
    if (anagrams[sorted]) anagrams[sorted].push(word);
    else anagrams[sorted] = [word];
  }
  // Write your code here.
  return Object.values(anagrams);
}
