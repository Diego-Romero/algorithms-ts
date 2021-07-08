// rest syntax is used to collect all the values in an array, but it doesnt copy the values

function display(a, b, ...rest) {
  console.log(a, b, rest);
}

display(9, 10, 11, 12, 13, 14, 15, 16);

// example of how to get the name of the second object in this collection, in a single line.
function display() {
  const exampleObject = { collection: [{ name: "Kelly" }, { name: "Anna" }] };
  const {
    collection: [, { name: secondObject }],
  } = exampleObject;
  console.log(secondObject);
}
display();