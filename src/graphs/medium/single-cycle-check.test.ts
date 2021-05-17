/**
 * Given an array of integers both positive and negative, where each integer represents a jump of its value in the array. For instance, the integer 2 represents a jump of two indices forward in the array.
 * If a jump spills past the array's bounds it wraps over to the other side.
 * Write a function that returns a boolean representing wether the jumps in the array form a single cycle. A single cycle occurs if, starting at any index in the array and following the jumps, every element in the array is visited exactly once before landing back on the starting index.
 */

export function hasSingleCycle(array: number[]) {
  const visited: boolean[] = new Array(array.length).fill(false)
  let currentIndex = 0, counter = 0;
  while (counter < array.length) {
    let sum = currentIndex + array[currentIndex];
    console.log('n :', array[currentIndex], ' current index', currentIndex, sum)
    if (sum >= 0) {
      currentIndex = (sum % array.length)
    } else {
      currentIndex = array.length - (Math.abs(sum ) % array.length); // 3 - 4 = -1, 1 - 6 = 5
    }
    if (visited[currentIndex]) return false;
    visited[currentIndex] = true;
    counter++;
    console.log(`current index ${currentIndex}, sum ${sum}`, visited)
  }
  return true;
}

describe('single cycle check', () => {
  test('should give me the correct answer', () => {
    const array = [2, 3, 1, -4, -4, 2]
    expect(hasSingleCycle(array)).toBeTruthy();
  })
  test('should give me the false when is wrong', () => {
    const array = [2, 1, 2, 1]
    expect(hasSingleCycle(array)).toBeFalsy();
  })
})
