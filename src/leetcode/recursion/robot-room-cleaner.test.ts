/**
 * class Robot {
 *      // Returns true if the cell in front is open and robot moves into the cell.
 *      // Returns false if the cell in front is blocked and robot stays in the current cell.
 * 		move(): boolean {}
 *
 *      // Robot will stay in the same cell after calling turnLeft/turnRight.
 *      // Each turn will be 90 degrees.
 * 		turnRight() {}
 *
 *      // Robot will stay in the same cell after calling turnLeft/turnRight.
 *      // Each turn will be 90 degrees.
 * 		turnLeft() {}
 *
 * 		// Clean the current cell.
 * 		clean(): {}
 * }
 */

class Robot {
  move(): boolean {
    return true;
  }
  turnRight() {}
  turnLeft() {}
  clean() {}
}

function cleanRoom(robot: Robot) {
  // for the current location, it needs to move in all four directions
  // first it cleans the current cell it landed, and marks it as visited
  const visited = new Set<string>();
  search(robot, visited, 0, 0);
}

function search(robot: Robot, visited: Set<string>, row: number, col: number) {
  // mark the current cell as visited
  robot.clean();
  const currentPosition = formatPosition(row, col);
  visited.add(currentPosition);
  // move to every possible position
  for (let i = 0; i < 4; i++) {
    // move up first
  }
}

function formatPosition(row: number, col: number) {
  return `${row}:${col}`;
}

function isValid() {}
