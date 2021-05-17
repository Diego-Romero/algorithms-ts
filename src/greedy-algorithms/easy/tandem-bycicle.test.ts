/**
 * you have 2 arrays that denote some bicycle speeds, differentiated by the color of their shirt.
 * A tandem bike is a bike riden by 2 people, in which the person doing the most effort will dictate the speed,
 * for example if we have someone riding at 3 and another riding at 5 speed, the velocity will be 5.
 * 
 * Given these 2 arrays, find the fastest possible way to pair one of each people, to get the max speed from all the bikes, if the boolean fastest is set to false, provide the lowest possible speed
 */

export function tandemBicycle(
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean
) {
  // always sorting red shirts and will change blue depending on fastest
  redShirtSpeeds.sort((a, b) => a - b)
  let sum = 0;
  if (fastest) {
    blueShirtSpeeds.sort((a, b) => b - a)
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])
    }
  } else {
    blueShirtSpeeds.sort((a, b) => a - b)
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])
    }
  }
  return sum; 
}

describe('tandemBicycle(', () => {
  const red = [5, 5, 3, 9, 2], blue = [3, 6, 7, 2, 1]
  test('should return the maximum velocity possible', () => {
    expect(tandemBicycle(red, blue, true)).toEqual(32)
  })
  test('should return the min velocity possible', () => {
    expect(tandemBicycle(red, blue, false)).toEqual(25)
  })
})
