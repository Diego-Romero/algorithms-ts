/**
 * Given a list of edges representing an unweighted, direct graph with at least one node. Write a function that returns a boolean representing wether the given graph contains a cycle.
 */

export function cycleInGraph(edges: number[][]) {
  let cycleExists = false;

  for (let index in edges) {
    const initialArray = new Array(edges.length - 1).fill(0);
    recurse(parseInt(index), initialArray);
  }

  function recurse(index: number, array: number[]): void {
    if (array[index] === 1) {
      cycleExists = true;
      return;
    } // return true if we found a cycle
    const currentNodeEdges = edges[index];
    for (let edge of currentNodeEdges) {
      const newArray = [...array];
      newArray[index] = 1;
      recurse(edge, newArray);
    }
  }

  return cycleExists;
}

describe("cycle in graph", () => {
  test("should detect when there is not a cycle in the graph when there is just one node", () => {
    const edges = [[]];
    expect(cycleInGraph(edges)).toBeFalsy();
  });
  test("should detect if there is a cycle in the graph when there is just one node", () => {
    const edges = [[0]];
    expect(cycleInGraph(edges)).toBeTruthy();
  });
  test("should detect if there is a cycle in the graph", () => {
    const edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];
    expect(cycleInGraph(edges)).toBeTruthy();
  });
});
