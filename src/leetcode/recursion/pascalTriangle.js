function pascalTriangle(row, col) {
  if (row === 0 || col < 1 || col > row) return 0;
  if (row === 1 || col === 1 || row === col) return 1;
  return pascalTriangle(row - 1, col - 1) + pascalTriangle(row - 1, col);
}

console.log(pascalTriangle(5, 3));
