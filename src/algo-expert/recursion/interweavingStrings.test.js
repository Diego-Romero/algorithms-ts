// 2 ^(N + M) | N + M space
function interweavingStrings(one, two, three) {
  let found = false;
  // iterate through the string with 2 pointers, trying to create the string
  // create a recursive function which has 2 pointers, checking if we can reach the end of the string
  function recurse(p1, p2, p3) {
    // traverse both strings, trying all the possible paths
    if (p3 === three.length && p1 >= one.length && p2 >= two.length) {
      found = true;
      return;
    }
    // console.log(one[p1], two[p2], three[p3])
    // need to check with the first one and the second one
    // keep trying to get closer
    if (p1 < one.length && one[p1] === three[p3]) recurse(p1 + 1, p2, p3 + 1);
    if (p2 < two.length && two[p2] === three[p3]) recurse(p1, p2 + 1, p3 + 1);

    // if none, return and try again with a previous char
    return;
  }

  recurse(0, 0, 0);

  return found;
}

// Do not edit the line below.
exports.interweavingStrings = interweavingStrings;
