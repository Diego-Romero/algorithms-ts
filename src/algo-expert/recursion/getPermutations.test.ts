// iterative solution
export function getPermutations(array: number[]) {
  if (!array.length) return [];
  let permutations: number[][] = [[]];
  for (let n of array) {
    const size = permutations.length;
    for (let i = 0; i < size; i++) {
      const current = permutations.shift()!;
      for (let j = 0; j <= current.length; j++) {
        // need to create a copy with current n at every index
        const copy = [...current];
        copy.splice(j, 0, n);
        permutations.push(copy);
      }
    }
  }

  return permutations;
}


