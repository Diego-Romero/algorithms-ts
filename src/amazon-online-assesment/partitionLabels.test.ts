// O(N) time | space
function partitionLabels(s: string): number[] {
  // could create a map that shows the index of the last time this string showed
  if (s.length === 0) return [];
  const result: number[] = [];
  const lastIndexMap = new Map<string, number>();
  let currentSplit: number = 0;
  let currentMaxIndex: number = 0;
  s.split("").forEach((char, index) => lastIndexMap.set(char, index));
  // console.log(lastIndexMap);
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    currentMaxIndex = Math.max(currentMaxIndex, lastIndexMap.get(char)!);
    console.log(char, currentMaxIndex, i);
    if (i === currentMaxIndex) {
      // we can create a partition
      const partition = i - currentSplit + 1;
      // console.log("adding partition", partition);
      result.push(partition);
      currentSplit = i + 1;
      currentMaxIndex = 0;
    }
  }
  console.log(result);

  // then iterate through the string, expanding the current maximum index, once we reach that index we can create a new partition

  return result;
}

describe("partition labels", () => {
  test("should with a basic example", () => {
    const s = "ababcbacadefegdehijhklij";
    //                 i
    const result = [9, 7, 8];
    expect(partitionLabels(s)).toEqual(result);
  });
  test("should with an interesting example", () => {
    const s = "eccbbbbdec";
    const result = [10];
    expect(partitionLabels(s)).toEqual(result);
  });
});
