function removeFirstTwo(list) {
  return list.slice(2, list.length);
}

function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
