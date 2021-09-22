/*
Double check that all the elements in the graph are connected from both ends

*/

// brute force would be to try to remove every edge, then try to DFS
// this would give us (E * (V + E)) time
function twoEdgeConnectedGraph(edges) {
  const graph = new Map();
  for (let i = 0; i < edges.length; i++) graph.set(i, new Set(edges[i]));
  // console.log(graph);

  for (let [node, outgoing] of graph.entries()) {
    // try removing an element and doing dfs
    // console.log("node", node);
    const temp = new Set(Array.from(outgoing));
    for (let out of outgoing) {
      temp.delete(out);
      console.log(out, temp);
      graph.set(node, temp);
      if (!dfs(graph)) return false;
      graph.set(node, outgoing);
      temp.add(out);
    }
  }

  return true;
}

// return a boolean if we could visit all the nodes
function dfs(graph) {
  // console.log(graph);
  const visited = new Set();
  // pick a node and visit all the rest
  for (let edge of graph.values()) {
		visited.add(edge)
  }
  console.log(visited);
  console.log(graph.size, visited.size);

	return graph.size === visited.size;
}

// Do not edit the line below.
exports.twoEdgeConnectedGraph = twoEdgeConnectedGraph;

// const edges = [
//   [1, 2, 5],
//   [0, 2],
//   [0, 1, 3],
//   [2, 4, 5],
//   [3, 5],
//   [0, 3, 4],
// ];
const edges = [[1], [0, 2, 3], [1, 3], [1, 2]];
console.log(twoEdgeConnectedGraph(edges));
