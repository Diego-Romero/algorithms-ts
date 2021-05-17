/**
 * Given 2 strings, one representing a document and one representing the characters available,
 * check if it is possible to generate the document string with only the characters provided
 * the empty space "" is something that you can always add.
 */
export function generateDocument(
  characters: string,
  document: string
): boolean {
  const frequencyMap = new Map<string, number>();
  for (let char of characters.split("")) {
    insertToMap(char);
  }

  for (let char of document.split("")) {
    const val = frequencyMap.get(char);
    if (!val || val - 1 < 0) return false;
    frequencyMap.set(char, val - 1);
  }

  function insertToMap(char: string) {
    if (frequencyMap.has(char))
      frequencyMap.set(char, frequencyMap.get(char)! + 1);
    else frequencyMap.set(char, 1);
  }
  return true;
}

describe("generateDocument", () => {
  test("should return true if it can generate the document", () => {
    expect(generateDocument("aabbcc", "abcabc")).toBeTruthy();
    expect(generateDocument("a ab bc  c", "abcabc")).toBeTruthy();
    expect(
      generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
    ).toBeTruthy();
  });
  test("should return false if it cant generate the document", () => {
    expect(generateDocument("aabbcc", "abcabcc")).toBeFalsy();
    expect(generateDocument("aabbc", "abcabc")).toBeFalsy();
    expect(generateDocument("aabbc", "abcabc ")).toBeFalsy(); // empty space also counts
    expect(generateDocument("aabbc", "abcabc")).toBeFalsy();
    expect(generateDocument("A", "a")).toBeFalsy();
  });
});
