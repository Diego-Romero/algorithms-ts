/**
 * You are giving 2 arrays, one with students w blue shirts and another with red shirts, write a function that states if is possible to take a class picture with the following guidelines
 * all students wearing red shirts have to be in the same row
 * same for blue shirts
 * each student in the back row must be strictly taller than the student directly in front of the row
 * 
 * Clarifying questions:
 * minimum amount of students?
 * presume we are only dealing with positive numbers?
 */


export function classPhotos(
  redShirtHeights: number[],
  blueShirtHeights: number[]
) {
  redShirtHeights.sort();
  blueShirtHeights.sort();
  if (redShirtHeights[0] < blueShirtHeights[0]) {
    for(let i = 0; i < redShirtHeights.length; i++) {
      if (redShirtHeights[i] >= blueShirtHeights[i]) return false;
    }
    return true;
  } else if (blueShirtHeights[0] < redShirtHeights[0]) {
    for (let i = 0; i < redShirtHeights.length; i++) {
      if (blueShirtHeights[i] >= redShirtHeights[i]) return false;
    }
    return true;
  }
  return false;
}

describe('class photos', () => {
  test('should return true, as if we place the blue students behind we can take the group photo', () => {
      const red = [5, 8, 1, 3, 4], blue = [6, 9, 2, 4 ,5 ]
      expect(classPhotos(red, blue)).toBeTruthy()
  })
  test('should return true, as if we place the red students behind we can take the group photo', () => {
      const blue = [5, 8, 1, 3, 4], red = [6, 9, 2, 4 ,5 ]
      expect(classPhotos(red, blue)).toBeTruthy()
  })
  test('should return false, as if we place the blue students behind we can take the group photo', () => {
      const red = [5, 8, 1, 3, 4], blue = [6, 9, 1, 3,5 ]
      expect(classPhotos(red, blue)).toBeFalsy()
  })
   
})
