export function moveElementToEnd(array: number[], toMove: number) {
  // first we find the first available
  let available = 0;
  while (available < array.length) {
    if (array[available] === toMove) break;
    available++;
  }
  if (available >= array.length - 1) return array; // early stoppage toMove doesnt exists in the array

  let iterator = available; // needs to start at the same spot as available
  while (iterator < array.length) {
    if (array[iterator] !== toMove) {
      // swap and find new available
      swap(iterator, available);
      while (available < array.length) {
        if (array[available] === toMove) break;
        available++;
      }
    }
    iterator++;
  }

  function swap(x: number, y: number) {
    const temp = array[y];
    array[y] = array[x];
    array[x] = temp;
  }
  return array;
}
