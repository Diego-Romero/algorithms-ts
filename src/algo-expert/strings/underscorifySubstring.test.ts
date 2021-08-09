export function underscorifySubstring(string: string, substring: string) {
  let result: string = "";
  // keep track of the positions when we find
  const intervals: [number, number][] = []; // O(I) space
  let start: number = -1;
  let substringIdx = 0;
  for (let i = 0; i < string.length; i++) {
    // O(N ) time
    const char = string[i];
    // console.log(i, char, substringIdx, start);
    // need to check if we are iterating through the substring
    if (char !== substring[substringIdx]) {
      start = -1;
      substringIdx = 0;
    }
    if (char === substring[substringIdx]) {
      if (substringIdx === 0) start = i;
      substringIdx++;
      if (i - start + 1 === substring.length) {
        // console.log("pushing");
        intervals.push([start, i]);
        start = -1;
        substringIdx = 0;
      }
    }
  }
  console.log(intervals);
  let mergedIntervals: [number, number][] = [];
  let current = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    // O(I) time
    if (current[1] + 1 === intervals[i][0]) {
      // end of the current +1 equals the start of next one, merged them
      current = [current[0], intervals[i][1]];
    } else {
      mergedIntervals.push(current);
      current = intervals[i];
    }
  }
  mergedIntervals.push(current);
  // console.log(mergedIntervals);
  let flat: number[] = [];
  mergedIntervals.forEach((interval) => {
    flat = [...flat, interval[0], interval[1]];
  });
  console.log(flat);
  let isStart = true;
  let intervalIdx = 0;
  for (let i = 0; i < string.length; i++) {
    // O(N) time
    const char = string[i];
    if (i === flat[intervalIdx]) {
      if (isStart) {
        result += "_";
        result += char;
        isStart = false;
      } else {
        result += char;
        result += "_";
        isStart = true;
      }
      intervalIdx++;
    } else {
      result += char;
    }
  }

  return result;
}

describe("underscorify substring", () => {
  test("should give the right answer", () => {
    const string = "testthis is a testtest to see if testestest it works";
    console.log(underscorifySubstring(string, "test"));
  });
  // test("should work when having nested substrings", () => {
  //   const string = "tetesttes test testtest teses ";
  //   const result = "te_test_tes _test_ _testtest_ teses";
  //   console.log(underscorifySubstring(string, "test"));
  //   expect(underscorifySubstring(string, "test")).toEqual(result);
  // });
});

/**
- takes two strings, return the first one with all the second substrings underscorified

testthis is a testtest to see if testtesttest it works teso testtess tesest
0123          0  34  7 
[[0, 3], []]
test

_test_this is a testtest to see if _testtesttest_ it works testo _test_tess

potential solution in N^2
- iterate the string, whenever we find 
*/
