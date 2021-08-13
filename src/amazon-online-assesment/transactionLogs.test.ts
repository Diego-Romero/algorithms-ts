function transactionLogs(logs: string[], threshold: number): string[] {
  // create a frequency map to know how many users we got
  const map = new Map<string, number>();
  for (let log of logs) {
    const added = new Set<string>();
    const split = log.split(" ");
    for (let i = 0; i < split.length - 1; i++) {
      const user = split[i];
      if (!added.has(user)) {
        map.set(user, map.has(user) ? map.get(user)! + 1 : 1);
      }
      added.add(user);
    }
  }
  console.log(map);
  const result: string[] = [];
  for (let [key, value] of map.entries()) {
    if (value >= threshold) result.push(key);
  }
  // result.sort();
  console.log(result);

  return result;
}

describe("transaction logs", () => {
  test("should work", () => {
    const logs: string[] = [
      "345366 89921 45",
      "029323 38239 23",
      "38239 345366 15",
      "029323 38239 77",
      "345366 38239 23",
      "029323 345366 13",
      "38239 38239 23",
    ];
    expect(transactionLogs(logs, 3)).toEqual(["345366", "38239", "029323"]);
  });
});
