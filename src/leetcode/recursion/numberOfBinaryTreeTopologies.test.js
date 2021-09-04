function numberOfBinaryTreeTopologies(n, cache = { 0: 1 }) {
  if (n in cache) return cache[n];
  // need to calculate the number of topologies for both trees
  let numberOfTrees = 0; // 0 + 2 + 1 + ,
  for (let leftTreeSize = 0; leftTreeSize < n; leftTreeSize++) {
    // 0, 1, 2
    const rightTreeSize = n - 1 - leftTreeSize; // 3, 2, 1
    const numberOfLeftTrees = numberOfBinaryTreeTopologies(leftTreeSize, cache); // 
    const numberOfRightTrees = numberOfBinaryTreeTopologies(rightTreeSize, cache); // 1
    numberOfTrees += numberOfLeftTrees * numberOfRightTrees;
  }
  cache[n] = numberOfTrees;
  return numberOfTrees;
}

// Do not edit the line below.
exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;
console.log(numberOfBinaryTreeTopologies(3));

// describe("number of binary tree topologies", () => {
//   test("should work with 4", () => {
//     expect(numberOfBinaryTreeTopologies(4)).toEqual(14);
//   });
//   test("should work with 5", () => {
//     expect(numberOfBinaryTreeTopologies(5)).toEqual(42);
//   });
// });
