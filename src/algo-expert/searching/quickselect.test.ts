export function quickselect(array: number[], k: number) {
  if (array.length < k) return -1;
  for (let i = 0; i < k; i++) {
    // we want to put the smallest number at the start
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i]) swap(i, j, array);
    }
    console.log(array);
  }

  return array[k - 1];
}

function swap(i: number, j: number, array: number[]) {
  [array[i], array[j]] = [array[j], array[i]];
}

/**
- array of distinct integers
- returns the kth smallest integer in the array

clarifying:
- only positive numbers?
- k cant be 0, has to be a number between 1 and the length of the array

Brute force:
- Sort the array then retrieve by index: N log N
- Do K runs over the array, moving the smallest number to the start, this would give us O(K * N)

tests:
K = 3
[8, 5, 2, 9, 7, 6, 3] = 5
[2, 3, 8, 9, 7, 6, 5]

[-1, -2, 0, 3, 4, 19, 20] = 0

[1,2 3] = 3

K = 1
[8, 5, 2, 9, 7, 6, 3] = 22
[2, 3, 5, 6, 7, 8, 9]

[-1, -2, 0, 3, 4, 19, 20] = -1

[1,2 3] = 1


invalid:
- any value where length is smaller than 3
*/
