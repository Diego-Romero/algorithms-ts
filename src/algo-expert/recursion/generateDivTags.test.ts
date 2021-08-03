export function generateDivTags(numberOfTags: number) {
  if (numberOfTags === 0) return [];
  const OPEN = "<div>";
  const CLOSE = "</div>";
  // const OPEN = "(";
  // const CLOSE = ")";
  const result: string[] = [];

  function recurse(s: string, open: number, close: number) {
    // console.log(s, open, close);
    // console.log("-----------");
    if (close === numberOfTags) {
      result.push(s);
      return;
    }
    const diff = open - close; // add more closing only if there are more open
    if (open < numberOfTags) recurse(s + OPEN, open + 1, close);
    if (diff > 0 && close < numberOfTags) recurse(s + CLOSE, open, close + 1);
  }
  recurse(OPEN, 1, 0);

  return result;
}

describe("generate div tags", () => {
  test("should work with 1", () => {
    console.log(generateDivTags(1));
  });
  test("should work with 2", () => {
    console.log(generateDivTags(2));
  });

  test("should work with 3", () => {
    console.log(generateDivTags(3));
  });
});
