export function getNthFib(number: number): number {
  const cache = new Map<number, number>();

  function helper(n: number): number {
    const cached = cache.get(n);
    if (cached) return cached;
    if (n <= 1) return 0;
    if (n === 2) return 1;
    cache.set(n, getNthFib(n - 1) + getNthFib(n - 2));
    return cache.get(n)!;
  }

  return helper(number);
}

/**
- 

*/
