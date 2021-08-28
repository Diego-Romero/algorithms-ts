const find_happy_number = function (num) {
  let slow = num,
    fast = num;
  while (fast !== 1) {
    fast = nextNumber(nextNumber(fast));
    slow = nextNumber(slow);
    // console.log(fast, slow);
    if (fast === slow) break;
    if (fast === 1 || slow === 1) return true;
  }

  return false;
};

function nextNumber(number) {
  const string = number + "";
  const digits = string.split("");
  // console.log(digits);
  let next = 0;
  for (let digit of digits) {
    const n = parseInt(digit);
    if (n !== 0) {
      next += n * n;
    }
  }

  return next;
}

describe("find happy number", () => {
  test("should work", () => {
    console.log(`${find_happy_number(23)}`);
    console.log(`${find_happy_number(12)}`);
  });
});
