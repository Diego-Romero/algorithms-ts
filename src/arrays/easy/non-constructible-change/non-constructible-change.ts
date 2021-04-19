/*
Given an array of positive integers represent coins, write a function that can calculate the minimum change that you can't create
for example [1,2,5] the minimum change I can't create is 4.
*/

export function nonConstructibleChange(coins: number[]) {
  if (coins.length === 0) return 1;
  const sorted = coins.sort((a, b) => a - b)
  if(sorted[0] !== 1) return 1;
  let sum = sorted[0]
  for (let i = 0; i < sorted.length - 1; i++) {
    const current = coins[i], next = coins[i + 1]
    if (next > sum + 1) return sum + 1;
    else {
      sum = sum += next;
    }   
  }
  return sum + 1;
}
