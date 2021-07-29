type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray, depth = 1): number {
  let sum = 0;
  for (let element of array) {
    // console.log(element)
    if (Array.isArray(element)) {
      // console.log('is array')
      const summed = productSum(element, depth + 1);
      sum += summed;
    } else sum += element;
    // console.log(sum)
  }
  // console.log(array, depth, `returning: ${sum * depth}`)
  return sum * depth;
}
