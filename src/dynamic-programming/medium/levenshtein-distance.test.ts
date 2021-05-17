/**
 * Write a function that takes in two strings and returns the min number of edit operations that need to be performed on the first string to obtain the second string.
 *
 * There are 3 types of operations: insert, deletion and substitution.
 */

export function levenshteinDistance(str1: string, str2: string) {
  // first we make the matrix
  const edits: number[][] = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row: number[] = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] = 1 + Math.min(
          edits[i - 1][j],
          edits[i - 1][j - 1],
          edits[i][j - 1]
        );
      }
    }
  }
  return edits[str2.length][str1.length];
}

describe("Levenshtein distance", () => {
  test("should give the min number of edits 0", () => {
    expect(levenshteinDistance("yabd", "abc")).toEqual(2);
  });
});
