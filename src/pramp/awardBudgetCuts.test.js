/**
Award Budget Cuts
The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).

Analyze the time and space complexities of your solution.

Example:

input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190

Constraints:
- [time limit] 5000ms
- [input] array.double grantsArray
0 ≤ grantsArray.length ≤ 20
0 ≤ grantsArray[i]
[input] double newBudget
[output] double
 */

function findGrantsCap(grants, newBudget) {
  if (grants.length === 0) return newBudget;
  const equalSplit = newBudget / grants.length;
  // need to keep count of the remainder that we have from each number that is below the equal split, in this case I will mark them as negative integers.
  // we need to mark each element that is above the equal split and keep count of how many of them
  let grantsAboveEqualSplit = 0,
    remainder = 0;
  for (let i = 0; i < grants.length; i++) {
    const grant = grants[i];
    if (grant < equalSplit) remainder += equalSplit - grant; // 38 - 2 = 36
    if (grant > equalSplit) {
      grants[i] = grant * -1;
      grantsAboveEqualSplit++;
    }
  }

  return remainder / grantsAboveEqualSplit + equalSplit;
}

describe("Award budget cuts", () => {
  test("it should work with a basic input", () => {
    const grantsArray = [2, 100, 50, 120, 1000],
      newBudget = 190;
    const expected = 47;
    const result = findGrantsCap(grantsArray, newBudget);
    expect(result).toEqual(expected);
  });

  test("it should work with a basic input, in which one of the grants matches with the equal split", () => {
    const grantsArray = [2, 38, 50, 120, 1000],
      newBudget = 190;
    const expected = 50;
    const result = findGrantsCap(grantsArray, newBudget);
    expect(result).toEqual(expected);
  });

  test("it should work with a basic input, in which one of the grants matches with the equal split", () => {
    const grantsArray = [],
      newBudget = 30;
    const expected = 0;
    const result = findGrantsCap(grantsArray, newBudget);
    expect(result).toEqual(expected);
  });

  test("it should work with a basic input, where the input is 0", () => {
    const grantsArray = [0, 100],
      newBudget = 30;
    const expected = 30;
    const result = findGrantsCap(grantsArray, newBudget);
    expect(result).toEqual(expected);
  });

  test("it should work with a basic input, where the the overall budget is much larger than the existing values", () => {
    const grantsArray = [10, 10],
      newBudget = 100;
    const expected = 100;
    const result = findGrantsCap(grantsArray, newBudget);
    expect(result).toEqual(expected);
  });
  test("it should work with a basic input, where the the overall budget is much larger than the existing values", () => {
    const result = findGrantsCap([2, 100, 50, 120, 167], 400);
    /**
		split = 400 / 5 = 80
		remainder = 80 - 2 + 80 - 50 = 108
		108 /3 = 36
		36 + 80 = 116
		 */
    const expected = 128;
    expect(result).toEqual(expected);
  });
});
