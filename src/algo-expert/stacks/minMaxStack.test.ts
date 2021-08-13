// Feel free to add new properties and methods to the class.
type MinMax = [number, [number, number]];
export class MinMaxStack {
  stack: MinMax[] = [];

  peek(): number {
    if (this.stack.length) return this.stack[this.stack.length - 1][0];
    return -1;
  }

  pop(): number {
    if (this.stack.length) return this.stack.pop()![0];
    return -1;
  }

  push(number: number) {
    if (this.stack.length) {
      const top = this.stack[this.stack.length - 1];
      const max = Math.max(top[1][1], number);
      const min = Math.min(top[1][0], number);
      this.stack.push([number, [min, max]]);
    } else {
      this.stack.push([number, [number, number]]);
    }
  }

  getMin() {
    if (this.stack.length) {
      return this.stack[this.stack.length - 1][1][0];
    }
    return -1;
  }

  getMax() {
    if (this.stack.length) {
      return this.stack[this.stack.length - 1][1][1];
    }
    return -1;
  }
}

describe("min max stack", () => {
  test("should work", () => {
    const stack = new MinMaxStack();
    stack.push(5);
    expect(stack.getMax()).toEqual(5);
    expect(stack.getMin()).toEqual(5);
    stack.push(7);
    expect(stack.getMax()).toEqual(7);
    expect(stack.getMin()).toEqual(5);
    stack.push(2);
    expect(stack.getMax()).toEqual(7);
    expect(stack.getMin()).toEqual(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(7);
    expect(stack.pop()).toEqual(5);
  });
});

/**

stack:
4, [2, 7]
2, [2, 7]
7, [5, 7]
5, [5, 5]


min: 2
max: 7
 */
