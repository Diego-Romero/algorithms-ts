export function spiralTraverse(array: number[][]) {
  if (array.length === 0) return []; // if empty is passed

  const result: number[] = [];
  const n = array.length,
    m = array[0].length;
  if (n < 2) return array[0];

  let left = 0,
    right = n - 1,
    top = 0,
    bottom = m - 1; // indices match the exact ending

  while (left < right && top < bottom) {
    // top l to r
    for (let i = left; i <= right; i++) result.push(array[top][i]);
    // right top to b
    for (let i = top + 1; i <= bottom - 1; i++) result.push(array[i][right]);
    // bottom r to l
    for (let i = right; i >= left; i--) result.push(array[bottom][i]);
    // bottom to top l
    for (let i = bottom - 1; i >= top + 1; i--) result.push(array[i][left]);

    left++;
    right--;
    top++;
    bottom--;
  }

  return result;
}
