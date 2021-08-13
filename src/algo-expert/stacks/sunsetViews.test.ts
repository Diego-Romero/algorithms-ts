export enum Direction {
  East = "EAST",
  West = "WEST",
}

export function sunsetViews(buildings: number[], direction: Direction) {
  if (direction === Direction.East) {
    const stack: [number, number][] = [[buildings[0], 0]];
    for (let i = 1; i < buildings.length; i++) {
      const building = buildings[i];
      while (stack.length > 0 && building >= stack[stack.length - 1][0]) {
        stack.pop();
      }
      if (!stack.length || stack[stack.length - 1][0] > building)
        stack.push([building, i]);
    }
    return stack.map((s) => s[1]);
  } else {
    const stack: [number, number][] = [
      [buildings[buildings.length - 1], buildings.length - 1],
    ];
    for (let i = buildings.length - 2; i >= 0; i--) {
      const building = buildings[i];
      while (stack.length > 0 && building >= stack[stack.length - 1][0]) {
        stack.shift();
      }
      if (!stack.length || stack[stack.length - 1][0] > building)
        stack.unshift([building, i]);
      // console.log(stack, building);
    }
    // stack.reverse();
    return stack.map((s) => s[1]);
  }
}

/**
[0, 1, 2, 3, 4, 5, 6, 7] indices

[3, 5, 4, 4, 3, 1, 3, 2] HEIGHTS

stack:
5, 1 .  4, 3 . 

[(5, 1), (4, 3), (3, 6), (2, 7)]
 */

describe("Sunset Views", () => {
  test("should work with east", () => {
    const heights = [3, 5, 4, 4, 3, 1, 3, 2];
    const result = [1, 3, 6, 7];
    expect(sunsetViews(heights, Direction.East)).toEqual(result);
  });
  test("should work with west", () => {
    const heights = [3, 5, 4, 5, 3, 1, 3, 2];
    const result = [0, 1];
    expect(sunsetViews(heights, Direction.West)).toEqual(result);
  });
});
