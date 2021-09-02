function kthGrammar(row: number, col: number): number {
  // // need to generate n rows, then retrieve k - 1 of that row
  let characters: number[] = [];
  function recurse(level: number, chars: number[]) {
    if (level === 0) characters = chars;
    else {
      const newChars: number[] = [];
      chars.forEach((char) => {
        if (char === 0) {
          newChars.push(0);
          newChars.push(1);
        } else {
          newChars.push(1);
          newChars.push(0);
        }
      });

      recurse(level - 1, newChars);
    }
  }
  recurse(row, [0]);
  console.log(characters);

  return characters[col - 1];
}

console.log(kthGrammar(3, 1));
