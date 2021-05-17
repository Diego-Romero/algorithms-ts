/**
 * Given an array of buildings and a direction that all the buildings face, return an array of indices of the buildings that can see the sunset. A building can see the sunset if its strictly taller than all of the buildings that come after it in the direction that it faces.
 */

export enum Direction {
  East = "EAST",
  West = "WEST",
}

export function sunsetViews(buildings: number[], direction: Direction) {
  const result: number[] = []
  let max = 0;
  if (direction === Direction.East) {
    for (let i = buildings.length - 1; i >= 0; i--) {
      const current = buildings[i];
      if (current > max) {
        max = current;
        result.unshift(i);
      }
    }
  } else {
    for (let i = 0; i < buildings.length; i++) {
      const current = buildings[i];
      if (current > max) {
        max = current;
        result.push(i)
      }
    }
  }
  console.log(result)
  return result;
}

describe('sunset views', () => {
  test('should return the amount of valid indices', () => {
    const buildings = [3,5,4,4,3,1,3,2];
    expect(sunsetViews(buildings, Direction.East)).toEqual([1,3,6,7])
    expect(sunsetViews(buildings, Direction.West)).toEqual([0, 1]);
  })
   
})
