type Range = [number, number];

export function subarraySort(array: number[]): Range {
  let result: Range = [-1, -1];
  let maxDistance = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      console.log(i, array[i], "need to find correct position");
      // move back until we reach start or current >= prev
      let prev = i - 1,
        current = i;
      while (prev >= 0 && array[prev] > array[current]) {
        // record
        const min: number = result[0] === -1 ? prev : Math.min(result[0], prev);
        const max: number =
          result[1] === -1 ? current : Math.max(result[1], current);
        result = [min, max];

        prev--;
        current--;
      }
    }
  }

  // array is already sorted
  return result;
}

/**
- at least 2 integers
- return the smallest sub array that needs sorting
 0. 1
[2, 1]

 0  1. 2. 3. 4   5.  6  7.  8. 9. 10. 11. 12
[1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
brute force approach in N^2

[2, 1]


iterate through the numbers, when found an out of place, 
iterate left until we've found its correct place,
keep track of the place it should be



*/
