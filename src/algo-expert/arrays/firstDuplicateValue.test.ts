// N runtime/memory approach
// export function firstDuplicateValue(array: number[]) {
// 	const set = new Set();

// 	for (let n of array) {
// 		if (set.has(n)) return n;
// 		set.add(n);
// 	}

//   return -1;
// }

export function firstDuplicateValue(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let value = Math.abs(array[i]); //2, 1
    if (array[value - 1] < 0) return value;
    array[value - 1] = array[value - 1] * -1;
  }
  return -1;
}

/**
- array of integers between 1 and N, N is the length of the array
- write a function that returns the first integers that appears more than once

Solutions:
- Really easy to do with N memory, put counters in a map

numbers
[2, 1, 5, 2, 3, 3, 4]

[2, -1, 5, 2, 3, 3, 4]

example 2

[2, 1, 5, 3, 3, 2, 4]

[-2, -1, -5, 3, -3, 2, 4]

*/
