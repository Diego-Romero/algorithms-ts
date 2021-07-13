export function longestPeak(array: number[]): number {
  let currentCounter = 1,
    max = 0,
    isAscending = false,
    finishedAscending = false;

  for (let i = 0; i < array.length - 1; i++) {
    const current = array[i],
      next = array[i + 1];
    // console.log(`current: ${current}, next: ${next}, is ascending: ${isAscending}`)
    if (next > current) {
      // when I start ascending again, I reset
      if (finishedAscending) {
        finishedAscending = false;
        currentCounter = 1;
      }
      currentCounter++;
      isAscending = true;
    } else if (next < current) {
      if (isAscending) {
        finishedAscending = true;
      }
      isAscending = false;
      // we record the longest possible on the way down
      if (finishedAscending) {
        currentCounter++;
        max = Math.max(max, currentCounter);
      }
    } else {
      // reset
      finishedAscending = false;
      isAscending = false;
      currentCounter = 1;
    }
  }

  return max;
}
