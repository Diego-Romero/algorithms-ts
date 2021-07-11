// if the next number we are trying to create is bigger than the current one + 1

export function nonConstructibleChange(coins: number[]) {
  const sorted = coins.sort((a, b) => a - b);
  if (sorted[0] !== 1) return 1;

  let sum = 0;
  for (let i = 0; i < coins.length - 1; i++) {
    const current = sorted[i];
    sum += current; // 1 + 1
    // the sum of all we have + 1 is smaller than the sum + the next one
    if (sum + 1 < sorted[i + 1]) return sum + 1;
  }

  sum += sorted[sorted.length - 1];
  return sum + 1;
}

describe("non constructible change", () => {
  test("should work", () => {
    const coins = [5, 7, 1, 1, 2, 3, 22];
    console.log(nonConstructibleChange(coins));
  });
});
