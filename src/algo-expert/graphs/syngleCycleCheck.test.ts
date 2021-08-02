export function hasSingleCycle(array: number[]) {
  let current = 0;
	let visited = 0;

  while (visited < array.length) {
		if (current === 0 && visited > 0) return false;
		current = calculate(current, array);
		console.log(current, visited)
		visited++;
	}

  return current === 0;
}

function calculate(index: number, array: number[]): number {
  let n = array[index];
	let sum = (index + n) % array.length;
	return sum >= 0 ? sum : sum + array.length;
}
/**
Write a function to check if the array has a cycle

Solution:
O(N) time | space, having an array that has flags of wether we have checked this spot already
- iterate n times, each time filling the visited index in the array, if we have visited already return false, if we reach the end return true
- figure out how to do negative index accessing in JS

Qs:
- can we get an empty array? what is the result
- overflow, underflow

valid:
[2, 3, 1, -4, -4, 2]
[1]
[1, 1]

invalid:
[1, 3, 1, -4, -4, 2]
 x  x.         x
[2, 1, 1]
[2, 1]
*/
