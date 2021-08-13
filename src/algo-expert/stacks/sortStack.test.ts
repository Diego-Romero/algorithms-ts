export function sortStack(stack: number[]) {
  let swapped = true;
  const recurse = () => {
    if (stack.length >= 2) {
      let last = stack.pop() as number;
      let currentTop = stack.pop() as number;
      let min: number, max: number;
      if (currentTop > last) {
        swapped = true;
        min = last;
        max = currentTop;
      } else {
        min = currentTop;
        max = last;
      }
      stack.push(min);
      recurse();
      stack.push(max);
    }
  };

  while (swapped) {
    swapped = false;
    recurse();
  }
  return stack;
}

describe("sort stack", () => {
  test("should work", () => {
    const array = [-5, 2, -2, 4, 3, 1];
    console.log(sortStack(array));
  });
});

/**
 * 
 [-5, 2, -2, 4, 3, 1]

3
4

1
-2
2
-5

can only use pop and push and peek at the last element
have to use the same stack
has to be a recursive solution

we have to pop and compare the top 2 elements recursively, returning them in the correct order

*/
