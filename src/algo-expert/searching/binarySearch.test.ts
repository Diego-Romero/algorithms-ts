export function binarySearch(array: number[], target: number): number {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (array[mid] > target) {
      right = mid - 1;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else return mid;
  }
  return -1;
}
