const max_sub_array_of_size_k = function (k, arr) {
  // I want to use a sliding window approach
  let max = 0;
  // want to increase max to be the first k numbers
  for (let i = 0; i < k; i++) {
    // 2, 1, 5
    max += arr[i];
  }

  let current = max;
  for (let i = k; i < arr.length; i++) {
    current -= arr[i - k]; // remove from the left
    current += arr[i]; // increase on the right
    max = Math.max(current, max);
  }

  // do a sliding window approach, where I remove index - k and increase the current index

  return max;
};

// approach in O(N) time | O(1) space

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])); // 7
