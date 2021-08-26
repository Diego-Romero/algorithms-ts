/*
Problem Statement#
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
Example 2:

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

*/

const length_of_longest_substring = function (arr, k) {
  let zeroCount = 0,
    longest = 0,
    left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 0) zeroCount++;

    while (zeroCount > k) {
      // can only allow up to k zeroes
      if (arr[left] === 0) zeroCount--;
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};

describe("length of longest contiguous subarray having all 1s", () => {
  test("should find the longest length with k 2", () => {
    const array = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
      k = 2;
    /*
															                   r
									                l
			record 0s, record max length when moving right (after trying to move left)
			move left when we have currentLength - 0count > k
		*/

    expect(length_of_longest_substring(array, k)).toEqual(6);
  });
	test("should find the longest length with k 3", () => {
    const array = [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      k = 3;

    expect(length_of_longest_substring(array, k)).toEqual(9);
  });
  test("should work when there is only ones", () => {
    const array = [1, 1, 1, 1, 1];
    const k = 0;
    expect(length_of_longest_substring(array, k)).toEqual(5);
  });
  test("should work when there is only ones and k bigger than 0", () => {
    const array = [1, 1, 1, 1, 1];
    const k = 2;
    expect(length_of_longest_substring(array, k)).toEqual(5);
  });

  test("should find the longest length when its at the start", () => {
    const array = [0, 1, 1, 0, 1, 0, 0, 0, 1];
    const k = 2;
    expect(length_of_longest_substring(array, k)).toEqual(5);
  });
});
