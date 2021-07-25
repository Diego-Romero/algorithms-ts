export function classPhotos(red: number[], blue: number[]) {
  red.sort((a, b) => a - b);
  blue.sort((a, b) => a - b);
  if (red[0] === blue[0]) return false;
  const redTaller = red[0] > blue[0];

  for (let i = 0; i < red.length; i++) {
    if (!redTaller && red[i] >= blue[i]) return false;
    if (redTaller && blue[i] >= red[i]) return false;
  }

  return true;
}

/**
- all red and blues have to be in the same row
- all students in the back row have to be taller than the ones in the lower row
- always more than 2 students
- only heights that are positive integers
- students in the back row have to be strictly taller

approach:
brute force O(N log N);
- have to sort, as I need to guarantee that all the students in the back row are taller
*/
