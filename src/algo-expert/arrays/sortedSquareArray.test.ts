export function sortedSquaredArray(array: number[]) {
  let result: number[] = [],
    left = 0,
    right = array.length - 1;
  while (left < right) {
    const leftVal = Math.abs(array[left] as number);
    const rightVal = Math.abs(array[right] as number);
    if (leftVal > rightVal) {
      result.unshift(leftVal * leftVal);
      left++;
    } else {
      result.unshift(rightVal * rightVal);
      right--;
    }
  }

  const leftVal = Math.abs(array[left]);
  result.unshift(leftVal * leftVal);

  return result;
}

/**
- non emtpy array of integers
- sorted in ascending order
[1,2,3,4,5]

result = [49, 100,]

[-10, -5,-2,3,4,5, 7]
         l
          r

[9, 16, 25, 25, 49, 100]                   

*/
