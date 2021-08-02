// export function staircaseTraversal(height: number, maxSteps: number) {
//   if (height < 0) return 0;
//   if (height === 0) return 1;
//   let sum = 0;
//   for (let step = 1; step <= maxSteps; step++) {
//     sum += staircaseTraversal(height - step, maxSteps);
//   }

//   return sum;
// }

// solution in O(K * N) time, K being the steps and N the height, as for every height that we have, we need to go through K steps.
// O(N) is the space, as we will need a max of N recursive calls to come to an answer.

type Cache = { [key: number]: number };

export function staircaseTraversal(height: number, maxSteps: number) {
  const cache: Cache = { 0: 1 };

  function recurse(currentSteps: number) {
    if (currentSteps < 0) return 0;
    if (cache[currentSteps]) return cache[currentSteps];
    let sum = 0;
    for (let steps = 1; steps <= maxSteps; steps++) {
      sum += recurse(currentSteps - steps);
    }
    cache[currentSteps] = sum;
    return cache[currentSteps];
  }
  console.log(cache);
  return recurse(height);
}
