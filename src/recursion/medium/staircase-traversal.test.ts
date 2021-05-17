/**
 * Write a function that given 2 positive numbers representing the height and the max number of steps that you ca advance, tells you in how many ways you could climb the staircase
 */

export function staircaseTraversal(height: number, maxSteps: number) {
  const possibleSteps: number[] = []
  let numberOfWays = 0;
  for (let i = 1; i <= maxSteps; i++) possibleSteps.push(i);

  for (let i = 0; i < possibleSteps.length; i++) {
    recurse(possibleSteps[i], [possibleSteps[i]])
  }

  function recurse(sum: number, steps: number[]) {
    // console.log(...arguments)
    if (sum === height) numberOfWays++;
    if (sum >= height) return;
    for (let i = 0; i < possibleSteps.length; i++) 
      recurse(sum + possibleSteps[i], [...steps, possibleSteps[i]]);

  }

  return numberOfWays;
}

describe('staircase traversal', () => {
  test('should return the number of ways to climb', () => {
    expect(staircaseTraversal(4, 2)).toEqual(5);
  })
  
})
