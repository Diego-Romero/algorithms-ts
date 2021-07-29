export function findThreeLargestNumbers(array: number[]) {
  for (let last = array.length - 1; last >= array.length - 3; last--) {
    for (let i = 0; i <= last; i++) {
      const current = array[i];
      if (current > array[last]) {
        swap(i, last, array);
      }
    }
  }

  return array.slice(array.length - 3);
}

function swap(i: number, j: number, array: number[]) {
  [array[i], array[j]] = [array[j], array[i]];
}
/**
- Can't sort the array

Clarifying questions:
- input can be less than 3?
- negative numbers?
- multiple numbers being the same in the result?
- 

- Iterate 3 times finding the largest number each time?
- Iterate through the array putting the largest number in the end, if found a largest.
*/
