/**
 * Write a function that curries along the way.
 * The function should ultimately return a string, it should start with bl and for any mount of empty parameter calls to the function, it should
 * append o's, as soon as it receives a string as a parameter it should return bl + number of empty calls + the string.
 *
 * Clarifying questions:
 * - Can I receive no calls with empty parameters? not for now
 * - Should I also consider the edge case when I don't receive a string as a parameter? not for now
 * - Is anything but a string also an acceptable input parameter? Can the string be empty?
 * Examples:
 *
 * Approach:
 * - Record the string that we currently have, it should always start with the prefix of 'bl'
 * - Return a function that receives a parameter, if we don't have a string as a parameter, then append a 'o' to our prefix.
 * - If we receive a string as a parameter, add it to the prefix and return it.
 */

// function bl() {
//   let prefix = "bl"; // bloo mberg
//   // need to return a recursive function, we should stop as soon as we receive a string as an input parameter
//   function recurse(string) {
//     if (string) return prefix + string;
//     prefix = prefix + "o";
//     return recurse;
//   }
//   return recurse;
// }

function bl(current = "", prefix = "bl") {
  return current === ""
    ? (string) => bl(string, (prefix += "o"))
    : prefix + current;
}

// console.log(bl()()("mberg")); // bloomberg
// console.log(bl()()()("mberg")); // blooomberg
// console.log(bl()("mberg")); // blomberg

describe("Bloomberg", () => {
  test("should work with 2 empty calls", () => {
    expect(bl()()("mberg")).toEqual("bloomberg");
  });
  test("should work with 3 empty calls", () => {
    expect(bl()()()("mberg")).toEqual("blooomberg");
  });
  test("should work with 1 empty calls", () => {
    expect(bl()("mberg")).toEqual("blomberg");
  });
  test("should work with 0 empty calls", () => {
    expect(bl("mberg")).toEqual("blmberg");
  });
});
