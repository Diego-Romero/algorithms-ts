export function tandemBicycle(red: number[], blue: number[], fastest: boolean) {
  red.sort((a, b) => a - b);
  fastest ? blue.sort((a, b) => b - a) : blue.sort((a, b) => a - b);
  // console.log(red, blue);
  let count = 0;
  for (let i = 0; i < red.length; i++) {
    count += Math.max(blue[i], red[i]);
  }

  return count;
}

/**

- have to pair one from each side, 
- calculate the fastest and slowest speed from each side

clarifying questions
- could I receive empty array?
- could I have floats?

brute force: N log N time | O(1) space
valid:
[1, 4]
[5, 2]
5 + 4

[10, 12]
[9, 11]
10 + 12

[] 
[]
0
*/
