function createKey(low, high) {
  return `${low}:${high}`;
}

// O(low * high * n) time | O(low * high) space, where n is the number of measuring cups
function ambiguousMeasurements(cups, targetLow, targetHigh) {
  const cache = new Set();
  let found = false;

  // recursively try to find the range with the cups, backtrack and try all the other possibilities as well
  // caveat we need to cache the numbers that we have already tried
  function recurse(low, high) {
    // keep track of the low and high count
    if (found) return;
    // check if we are in the range
    const key = createKey(low, high);
    if (
      low >= targetLow &&
      low <= targetHigh &&
      high >= targetLow &&
      high <= targetHigh
    ) {
      found = true;
      cache.add(key);
      return;
    }
    if (cache.has(key)) return; // already tried this pair

    // we want to keep going, as long as both cups are lower than the end
    if (low <= targetHigh || high <= targetHigh) {
      for (let cup of cups) {
        recurse(low + cup[0], high + cup[1]);
      }
    }
    cache.add(key);
  }
  recurse(0, 0);

  return found;
}

// Do not edit the line below.
exports.ambiguousMeasurements = ambiguousMeasurements;

// const cups = [
//   [200, 210],
//   [450, 465],
//   [800, 850],
// ];
// const result = ambiguousMeasurements(cups, 2100, 2300);
const cups = [
  [1, 3],
  [2, 4],
  [5, 6],
];
const result = ambiguousMeasurements(cups, 100, 101);

console.log(result);
