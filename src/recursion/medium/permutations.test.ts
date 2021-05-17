/**
 * Write a function that takes an array of unique integers, and returns an array with all the possible permutations of those integers
 */

export function getPermutations(array: number[]) {
  const result: number[][] = [];
  let permutations: number[][] = [[array[0]]]
  for (let i = 1; i < array.length; i++) {
    recurse(array[i]);
  }

  function recurse(n: number) {
    let newPerm: number[][] = [];
    for (let i = 0; i < permutations.length; i++) {
      const permutation = permutations[i];
      for (let j = 0; j <= permutation.length; j++) {
        const newElem: number[] = [...permutation]
        newElem.splice(j, 0, n); // inserts element at specific index
        if (newElem.length === array.length) result.push(newElem)
        else newPerm.push(newElem) 
      }
    }
    permutations = newPerm;
  }

  console.log(result)

  return result;
}

describe('get permutations', () => {
  test('should return all the permutations', () => {
    const array = [1,2,3] 
    const result = [
      [1,2,3],
      [1,3,2],
      [2,1,3],
      [2,3,1],
      [3,1,1],
      [3,2,1],
    ]
    expect(getPermutations(array)).toEqual(result);
  })
   
});
