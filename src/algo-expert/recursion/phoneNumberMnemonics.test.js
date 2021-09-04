const digitsMap = {
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
  0: ["0"],
};

function phoneNumberMnemonics(phoneNumber) {
  return recurse(0, [], phoneNumber);
}

function recurse(index, permutations, phoneNumber) {
  if (index === phoneNumber.length) return permutations;

  const currentDigit = phoneNumber[index];
  console.log(currentDigit);
  const digits = digitsMap[currentDigit];
  console.log(digits);

  if (index === 0) {
    // need to push the first set
    for (let digit of digits) {
      permutations.push(digit);
    }
    return recurse(index + 1, permutations, phoneNumber);
  } else {
    // for the current digits, we want to add it to all pre existing permutations
    const newPermutations = [];
    for (let digit of digits) {
      for (let permutation of permutations) {
        newPermutations.push(permutation + digit);
      }
    }
    return recurse(index + 1, newPermutations, phoneNumber);
  }
}

// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;

console.log(phoneNumberMnemonics("1905"));
