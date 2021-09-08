/*
Problem Statement#
Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.

Example 1:

Input: ['a', 'c', 'f', 'h'], key = 'f'
Output: 'h'
Explanation: The smallest letter greater than 'f' is 'h' in the given array.
Example 2:

Input: ['a', 'c', 'f', 'h'], key = 'b'
Output: 'c'
Explanation: The smallest letter greater than 'b' is 'c'.
Example 3:

Input: ['a', 'c', 'f', 'h'], key = 'm'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'm' is 'a'.
Example 4:

Input: ['a', 'c', 'f', 'h'], key = 'h'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'h' is 'a'.
*/

// O(Log N) time | O(N) space
const search_next_letter = function (letters, key) {
  // binary search, but convert the letters into numbers
  const numbers = [];
  const keyNumber = key.charCodeAt(0);
  for (let i = 0; i < letters.length; i++)
    numbers.push(letters[i].charCodeAt(0));

  console.log(numbers, keyNumber);

  let left = 0,
    right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midNumber = numbers[mid];
    // find the letter that is greater than the key
    // reach the point where we only have one
    if (left === right) {
      // either we are at the last index, or not
      return returnCorrectIndex(mid);
    }
    if (keyNumber > midNumber) left = mid + 1;
    else if (keyNumber < midNumber) right = mid - 1;
    else return returnCorrectIndex(mid);
  }
  function returnCorrectIndex(mid) {
    if (mid + 1 === letters.length) return letters[0];
    return letters[mid + 1];
  }

  return letters[0];
};

console.log(search_next_letter(["a", "c", "f", "h"], "f")); // h
console.log(search_next_letter(["a", "c", "f", "h"], "b")); // c
console.log(search_next_letter(["a", "c", "f", "h"], "m")); // a, as the list is circular
