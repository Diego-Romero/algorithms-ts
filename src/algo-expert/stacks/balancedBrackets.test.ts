export function balancedBrackets(string: string) {
  const stack: string[] = [];
  // need to check if we are opening or closing
  for (let bracket of string.split("")) {
    if (bracket === "(" || bracket === "[" || bracket === "{") {
      stack.push(bracket);
    } else if (bracket === ")" || bracket === "]" || bracket === "}") {
      const popped = stack.pop();
      switch (bracket) {
        case ")":
          if (popped !== "(") return false;
          break;
        case "]":
          if (popped !== "[") return false;
          break;
        case "}":
          if (popped !== "{") return false;
          break;
      }
    }
  }
  if (stack.length > 0) return false;

  return true;
}

describe("balanced brackets", () => {
  test("should work", () => {
    expect(balancedBrackets("([])")).toBeTruthy();
    expect(balancedBrackets("([])(){}(())()()")).toBeTruthy();
    expect(balancedBrackets("([})")).toBeFalsy();
  });
});
