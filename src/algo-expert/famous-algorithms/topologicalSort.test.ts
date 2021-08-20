type Dependency = [number, number];

// O(job + deps) time | space
export function topologicalSort(jobs: number[], deps: Dependency[]) {
  // create the graph first
  const dependencyCounter = new Map<number, number>();
  const dependencyMap = new Map<number, Set<number>>();
  const result: number[] = [];
  for (let job of jobs) {
    dependencyCounter.set(job, 0);
    dependencyMap.set(job, new Set());
  }
  for (let dep of deps) {
    const [node, target] = dep;
    dependencyCounter.set(target, dependencyCounter.get(target)! + 1);
    const depSet = dependencyMap.get(node)!;
    depSet.add(target);
  }

  const noDependencyQueue: number[] = [];
  for (let [key, value] of dependencyCounter.entries()) {
    if (value === 0) noDependencyQueue.push(key);
  }
  // DFS
  while (noDependencyQueue.length > 0) {
    let size = noDependencyQueue.length;
    for (let i = 0; i < size; i++) {
      const node = noDependencyQueue.shift()!;
      result.push(node);
      const deps: Set<number> = dependencyMap.get(node)!;
      // for every dep, reduce the counter, if the counter reaches 0 then add it to the que
      for (let dep of deps) {
        dependencyCounter.set(dep, dependencyCounter.get(dep)! - 1);
        if (dependencyCounter.get(dep) === 0) noDependencyQueue.push(dep);
      }
      console.log("releasing node", node, deps, dependencyCounter);
    }
  }

  console.log(result);
  return result.length === jobs.length ? result : [];
}

describe("Topological sort", () => {
  test("should work with a basic example", () => {
    const jobs = [1, 2, 3, 4];
    const deps: Dependency[] = [
      [1, 2],
      [1, 3],
      [3, 2],
      [4, 2],
      [4, 3],
    ];
    const result: number[] = [1, 4, 3, 2];
    expect(topologicalSort(jobs, deps)).toEqual(result);
  });
  test("should work when we have a circular graph", () => {
    const jobs = [1, 2, 3, 4];
    const deps: Dependency[] = [
      [1, 2],
      [1, 3],
      [3, 2],
      [4, 2],
      [2, 4],
      [4, 3],
    ];
    const result: number[] = [];
    expect(topologicalSort(jobs, deps)).toEqual(result);
  });
});
