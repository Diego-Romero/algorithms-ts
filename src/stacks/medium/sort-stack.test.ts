/**
 * Write a function that takes in an array of integers representing a stack, recursively sorts the stack in place and returns it.
 *
 * The array has to be treated as a stack, with the end of the array as the top of the stack. You are only allowed to
 * use the methods pop, push, peek.
 *
 * You are not allowed to perform any other operations on the input array, except for accessing the last element. You are also not allowed to use any other data structures and the solution has to be recursive.
 */

export function sortStack(stack: number[]): number[] {
  // recursing through the stack
  function recurse(popCounter: number, last: number): void {
    console.log(popCounter, last);

    if (popCounter === 0) {
      // change the order if the peeked one is smaller
      if (last < peek()) {
        const next = stack.pop() as number;
        stack.push(last);
        stack.push(next);
      } else {
        stack.push(last);
      }
    } else {
      recurse(popCounter - 1, stack.pop() as number);
      if (last < peek()) {
        const next = stack.pop() as number;
        stack.push(last);
        stack.push(next);
      } else stack.push(last);
    }
  }

  function peek(): number {
    return stack[stack.length - 1];
  }

  for (let i = 0; i < stack.length - 1; i++) {
    const last = stack.pop() as number;
    recurse(i, last);
  }

  return stack;
}

describe("sort stack", () => {
  test("should sort the stack", () => {
    const array = [-5, 2, -2, 4, 3, 1];
    const result = [-5, -2, 1, 2, 3, 4];
    expect(sortStack(array)).toEqual(result);
  });
});
