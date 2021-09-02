function climbStairs(n: number): number {
  const cache = new Map<number, number>([
    [0, 1],
    [-1, 0],
    [1, 1],
  ]);

  function recurse(number: number): number {
    if (cache.has(number)) return cache.get(number)!;
    const result = recurse(number - 1) + recurse(number - 2); // we need to go down 1 and 2 steps every time.
    cache.set(number, result);
    return result;
  }

  return recurse(n);
}
