export function twoNumberSum(array: number[], targetSum: number) {
  // 	for (let i = 0; i < array.length - 1; i++) {
  // 		for (let j = i + 1; j < array.length; j++ ) {
  // 			if (array[i] + array[j] === targetSum) return [array[i], array[j]];
  // 		}
  // 	}

  //   return [];
  const map: { [key: number]: boolean } = {};
  const set = new Set(array);
  for (let n of array) {
    if (n + n === targetSum) continue;
    const target = targetSum - n;
    if (set.has(target)) return [n, target];
  }

  return [];
}

/**
- at most one pair in the array
- distinct integers
- empty array if no two numbers
- can't add the integer itself
- order of the result doesnt matter

[3, 5, -4, 8, 11, 1, -1, 6] target = 10
10 - 3 = 7
10 - 5 = 5 // no because it would be the same
10 - 8 = 2
10 - 11 = -1 // right answer


[3, 5, -4, 8, 11, 1, -1, 6] target = -5

(-1 * 3) - 5 = -8
(-1 * 5) - 5 = -10
(-1 * -4) - 5 = -9
if target is negative -5
abs(-4) - 5 = =1


shouldnt work:
[5, 2]
[10, 1]

brute force can be achieved in N ^ 2

N time and space can be achieved if added to a set?
[3, 5, -4, 8, 11, 1, -1, 6]

need to also check that is not the same number

if N is negative we have to make abs the left value
Math.abs(-4) - 5 = - 1


*/
