export function isMonotonic(array: number[]) {
  if (array.length <= 1) return true;

  let goingUp: boolean | null = null;

  for (let i = 1; i < array.length; i++) {
    const prev = array[i - 1];
    const curr = array[i];
    // we dont know if the array goes down or up
    if (goingUp === null) {
      // if is the same we can just keep going
      if (prev !== curr) {
        if (prev < curr) goingUp = true;
        else goingUp = false;
      }
    }

    if (goingUp !== null) {
      if (goingUp && prev > curr) return false;
      if (!goingUp && curr > prev) return false;
    }
  }

  return true;
}

/**
[-1, -5, -10, -1100, -1100, -1101, -1102, -9001]   goingUp = true
           c
					 
[1000, 100, 50, 10, 10]
        c
	
[-1100, -1100, -1100, -1100] <- is valid

first find out if we are going up or we are going down

go through the numbers, if they are equal or higher/lower then follow that path


[-1100, -1100, -1100, -1100] <- is valid
[-1100, -1100, -1100, -1101] valid

BCR = O(N);
*/
