export function patternMatcher(pattern: string, string: string) {
  // todo:  need to swap the x's and y's, make sure that the x's start first
  let xsSwapped = false;
  if (pattern[0] === "y") {
    xsSwapped = true;
    pattern = pattern
      .split("")
      .map((p) => (p === "y" ? "x" : "y"))
      .join("");
  }
  console.log(pattern, xsSwapped);
  const map = new Map<string, number>();
  map.set("x", 0);
  map.set("y", 0);
  pattern.split("").forEach((p) => map.set(p, map.get(p)! + 1));
  const patternSplit = pattern.split("");

  // need to count how many x's before the first y

  for (let i = 1; i <= string.length; i++) {
    const x = string.substring(0, i);
    console.log("x is", x);
    // todo: find out x count and what is y
    let xCount: number = map.get("x")!;
    let currentIndex = 0;
    for (let i = 0; i < map.get("x")!; i++) {
      currentIndex = string.indexOf("x", currentIndex);
      console.log("looking for x", currentIndex);
      xCount--;
    }
    

    // const index = string.indexOf(x, i); // index needs to be after the first few x's
    // console.log(x, index);
    // if (index === -1) continue;
    // const y = string.substring(i, index); // y is the substring of all the initial x's until the next x
    // const currentPattern = createPattern(x, y);
    // // console.log(x, y, i, index, currentPattern);
    // if (currentPattern === string) return [x, y];
  }

  function createPattern(x: string, y: string) {
    let result = "";
    pattern.split("").forEach((p) => {
      result += p === "x" ? x : y;
    });

    return result;
  }

  return [""]; // return in case we can't find any
}

describe("pattern matcher", () => {
  test("should work with a more complicated pattern", () => {
    // const pattern = "yyxyyx";
    const pattern = "xxyxxy";
    const string = "gogopowerrangergogopowerranger";
    expect(patternMatcher(pattern, string)).toEqual(["gogo", "powerranger"]);
  });

  test("should work with a more complicated pattern ending in Y", () => {
    const pattern = "xxy";
    const string = "gogopowerranger";
    expect(patternMatcher(pattern, string)).toEqual(["gogo", "powerranger"]);
  });
  test("should work with a simple pattern", () => {
    const pattern = "xyx";
    const string = "gogopowerrangergogo";
    expect(patternMatcher(pattern, string)).toEqual(["gogo", "powerranger"]);
  });
});

/**
xyx

gogopowerrangergogo


iterate through the string checking if the first few characters 
can form the next part of the string
try:
g
go
gogox
*/
