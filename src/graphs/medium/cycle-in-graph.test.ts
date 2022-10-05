/**
 Given a list of edges representing an unweighted direct graph with at least one node.

 Clarifying questions:
 - The edges array represents a the number of nodes present in the graph (adjacency list).
 - Each element in the array (vertex) represents where this node is pointing to.

 Approach:
 - For every vertex in the graph, we should DFS starting from that point until we have reach a dead end or we have found that we are going in a circle.
 - given that we have N amount of vertex each time, we could use an array or a set to keep track of the indices that we have visited.
 - We should try to avoid visiting the same path twice, meaning that if we have visited this node once - we should not compute it a second time.
 - Runtime of this would be O(V * E) where V  is the amount of Vertices and E is the max amount of edges per vertex.
 */

export function cycleInGraph(vertices: number[][]): boolean {
  const traversedIndices = vertices.map(() => false);
  let foundLoop = false;

  function dfs(index: number, visited: boolean[]): void {
    // visit all the children nodes from here and mark them as visited
    if (visited[index] || foundLoop) {
      foundLoop = true;
      return;
    }
    const copy = [...visited];
    copy[index] = true;
    // traverse through all the edges of this vertex.
    const edges = vertices[index];
    for (let edge of edges) {
      dfs(edge, copy);
    }
    traversedIndices[index] = true; // we have traversed all the paths from this node
  }

  // we need to DFS from every position, we are going to use the index as a means to keep track of the nodes that we have visited.
  for (let i = 0; i < vertices.length; i++) {
    if (!traversedIndices[i]) {
      const visited = vertices.map(() => false);
      dfs(i, visited);
    }
  }

  return foundLoop;
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
  test("should detect if there is not a  cycle in the graph", () => {
    const edges = [[1, 3], [2, 3, 4], [], [], [2, 5], []];
    expect(cycleInGraph(edges)).toBeFalsy();
  });
});
