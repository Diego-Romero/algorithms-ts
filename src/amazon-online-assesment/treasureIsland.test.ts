/**
You have a map that marks the location of a treasure island. 
Some of the map area has jagged rocks and dangerous reefs. 
Other areas are safe to sail in. There are other explorers trying to find the treasure. 
So you must figure out a shortest route to the treasure island.

Assume the map area is a two dimensional grid, represented by a matrix of characters. 
You must start from the top-left corner of the map and can move one block up, down, left or right at a time. 
The treasure island is marked as X in a block of the matrix. X will not be at the top-left corner. 
Any block with dangerous rocks or reefs will be marked as D. 
You must not enter dangerous blocks. You cannot leave the map area. 
Other areas O are safe to sail in. The top-left corner is always safe. 
Output the minimum number of steps to get to the treasure.

Example:

Input:
[['O', 'O', 'O', 'O'],
 ['D', 'O', 'D', 'O'],
 ['O', 'O', 'O', 'O'],
 ['X', 'D', 'D', 'O']]

Output: 5
Explanation: Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0) The minimum route takes 5 steps.

// clarifying questions
- will there always be an X?
- 

// edge cases
- X is at opposite corner
- X can't be at coordinates 0, 0. 


BFS seems like the right approach
- we could iterate through the nearest nodes, checking 



Input:
[['V', 'V', 'V', 'V'],
 ['D', 'V', 'D', 'V'],
 ['V', 'V', 'V', 'O'],
 ['X', 'D', 'D', 'O']]
 */
function findTreasureIsland(map: string[][]): number {
  let steps: number = 0;
  const queue: [number, number][] = [[0, 0]];
  // BFS around the grid, adding the coordinates of all the nearest possible paths
  // for every iteration that we do, we increment the steps counter
  while (queue.length !== 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const coordinate = queue.shift()!;
      // add all the possible 0s
      const row = coordinate[0];
      const col = coordinate[1];
      if (
        row >= 0 &&
        row < map.length &&
        col >= 0 &&
        col < map[row].length &&
        map[row][col] !== "D"
      ) {
        if (map[row][col] === "X") {
          return steps;
        }
        map[row][col] = "V"; // mark the current one as visited
        queue.push([row + 1, col]);
        queue.push([row - 1, col]);
        queue.push([row, col + 1]);
        queue.push([row, col - 1]);
      }
    }
    steps++;
  }

  return -1;
}

describe("treasure island", () => {
  const input = [
    ["O", "O", "O", "O"],
    ["D", "O", "D", "O"],
    ["O", "O", "O", "O"],
    ["X", "D", "D", "O"],
  ];

  test("should work with the input", () => {
    expect(findTreasureIsland(input)).toEqual(5);
  });
});
