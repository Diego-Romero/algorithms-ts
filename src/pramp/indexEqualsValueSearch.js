// example array = [-8, 0, 2, 5, 7, 1, 12];

function indexEqualsValueSearch(arr) {
  
  let left = 0;
	let right = arr.length - 1;
  
  while (left <= right) {
    let midIndex = Math.floor((right + left) / 2); // 3, 1, 2
    const current = arr[midIndex]; // 5, 0, 2
		console.log(midIndex, current)
    
    if (current === midIndex) return current;
    else if (current > midIndex) right = midIndex - 1;
    else left = midIndex + 1;
  }
 
  
  
  return -1;
}

// const array = [-8, 0, 2, 5, 7, 1, 12];
// const array = [-8, -2, -1, 0, 4, 8, 12, 14];
const array = [-8, -2, -1, 0, 4];

const result = indexEqualsValueSearch(array);

console.log(result);