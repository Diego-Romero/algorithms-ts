

// solution in O(N) runtime, O(N) space
function balancedParentheses(str) {
  const cleanString = str.split('').filter(c => c !== ' ');
  const stack = []
  for (let i = 0; i < cleanString.length; i++) {
    const char = cleanString[i]
    const last = stack[stack.length - 1]
    switch (char) {
      case ')':
        if (last !== '(') return false;
        stack.pop()
        break;
      case ']':
        if (last !== '[') return false;
        stack.pop()
        break;
      case '}':
        if (last !== '{') return false;
        stack.pop()
        break;
      default:
        stack.push(char)
    }
  }

  if (stack.length !== 0) return false;

  return true;
}

describe('check parenthesis', () => {
  test('should return true if the parenthesis match', () => {
    const string = "{[()]}";
    expect(balancedParentheses(string)).toBeTruthy();
    const string = "[]{}";
    expect(balancedParentheses(string)).toBeTruthy();
  })
   
  test('should return false when they dont match', () => {
    const string = "()(]";
    expect(balancedParentheses(string)).toBeFalsy();
  })
})
