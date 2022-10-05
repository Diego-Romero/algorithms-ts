/**
 * We can receive any amount of empty parenthesis, and at the very end we will receive a string, that is when we have finished the string. We will append a O for every empty curried call to the function.
 *
 * Approach:
 * - we need a way to count the o's being added.
 * - we need a recursive function
 * - We could use a closure as the recursive function and have a counter in the outer function
 */

// function bl() {
//   let prefix = "bl";
//   const recurse = (params) => {
//     if (!params) {
//       prefix += "o";
//       return recurse;
//     } else {
//       return prefix + "o" + params;
//     }
//   };

//   return recurse;
// }

// O(N) time, where N is the number of curried functions | O(N + S) space, where S is the length of the last string.
function bl(input) {
  let prefix = "bl";
  const recurse = (params) => {
    if (!params) {
      prefix += "o";
      return recurse;
    }
    return prefix + params;
  };
  return recurse(input);
}

// console.log(bl()()("mberg")); // bloomberg
// console.log(bl()()()("mberg")); // blooomberg
// console.log(bl()("mberg")); // blomberg

describe("Bloomberg", () => {
  test("should work with 2 empty parenthesis", () => {
    const output = bl()()("mberg");
    expect(output).toEqual("bloomberg");
  });
  test("should work with 3 empty parenthesis", () => {
    const output = bl()()()("mberg");
    expect(output).toEqual("blooomberg");
  });
  test("should work with 1 empty parenthesis", () => {
    const output = bl()("mberg");
    expect(output).toEqual("blomberg");
  });
  test("should work with 1 empty parenthesis", () => {
    const output = bl("mberg");
    expect(output).toEqual("blmberg");
  });

  // test that the input is a string?
  // should it work without a string in the end?
  // what if we receive a string in the middle? Should we make it work too?
});
