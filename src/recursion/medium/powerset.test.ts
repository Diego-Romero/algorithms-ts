/**
 * Write a function that takes in an array of unique integers and returns its powerset.
 */

export function powerset(array: number[]) {
  const result: number[][] = [[]];
  
  for (let n of array) {
    recurse(n);
  }
  
  function recurse(n: number): void {
    const length = result.length;
    for (let i = 0; i < length; i++) {
      const current = result[i];
      const newArray: number[] = [...current]; // make a copy of the current array
      newArray.push(n);
      result.push(newArray)
    }
  }

  console.log(result)
  return result
}

describe('powerset', () => {
  test('should return the powersets', () => {
    const array = [1,2,3];
    const result = [
      [],
      [1],
      [2],
      [3],
      [1, 2],
      [1, 3],
      [2, 3],
      [1,2,3]
    ]
    expect(powerset(array)).toEqual(result);
  })
   
})
