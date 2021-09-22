/*
- unequal height and width
- return a list of all the words that can be in the board
- words can be places horizontally, vertically or diagonally
- characters can only be used once
- 2 or more words are able to overlap
*/
/*
- unequal height and width
- return a list of all the words that can be in the board
- words can be places horizontally, vertically or diagonally
- characters can only be used once
- 2 or more words are able to overlap

clarifying:
- words can't be empty string, they will always have at least something
*/

/*
Solution 1:
Brute force approach would be to iterate the board for for each word.
Whenever we encounter the first letter, we can trigger a BFS search for it, using backtracking,
when a potential path didn't work, we just go back, but we can't use the same space, meaning that we can modify the board temporarily, stating that we have used that space.

start with just doing this for one word, making sure the approach works across teh board
if we can do it with a complex word that is in all directions, move to doing it for all words in all directions

*/

function boggleBoard(board, words) {
  // Write your code here.
  const result = [];

  for (let word of words) {
    if (searchWord(board, word)) result.push(word);
  }
  // console.log("final board");
  // console.table(board);

  return result;
}

// search for this specific word in the whole board
function searchWord(board, word) {
  const start = word[0];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      // whenever we encounter a potential start, trigger BFS
      const char = board[row][col];
      if (char === start) {
        const found = bfs(row, col, 0, word, board);
        if (found) return true;
      }
    }
  }

  return false;
}

// BFS through the board, seeing if we were able to find the next char that we need to find, if we have return true
// through this, we need to mark the visited places with a unique identifier, and removing them once we've checked them
function bfs(row, col, index, word, board) {
  // we have found the full word in the board
  if (index >= word.length) {
    // console.log("FOUND THE WORD", word);
    return true;
  }
  const char = word[index];
  // console.log(char);
  // do all the necessary checks to guarantee this is is a valid coordinate, and the valid next char
  if (!validAttempt(row, col, board, char)) return false;
  // we have found the next valid character, mark it as visited
  board[row][col] = null;
  // console.log("found next valid char", char);
  // console.table(board);
  // BFS to all directions
  const top = bfs(row + 1, col, index + 1, word, board);
  const below = bfs(row - 1, col, index + 1, word, board);
  const right = bfs(row, col + 1, index + 1, word, board);
  const left = bfs(row, col - 1, index + 1, word, board);
  const upRight = bfs(row - 1, col + 1, index + 1, word, board);
  const upLeft = bfs(row - 1, col - 1, index + 1, word, board);
  const bottomLeft = bfs(row + 1, col - 1, index + 1, word, board);
  const bottomRight = bfs(row + 1, col + 1, index + 1, word, board);

  // once we have checked, we need to put it back to its previous state
  board[row][col] = char;

  // is any path viable?
  if (
    top ||
    below ||
    right ||
    left ||
    upRight ||
    upLeft ||
    bottomLeft ||
    bottomRight
  )
    return true; // if any of the direction is true, we return true for all of them

  return false; // return false if none of the directions worked.
}

function validAttempt(row, col, board, char) {
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[row].length ||
    board[row][col] !== char
  )
    return false;

  return true;
}

// Do not edit the line below.
exports.boggleBoard = boggleBoard;

const board = [
  ["t", "h", "i", "s", "i", "s", "a"],
  ["s", "i", "m", "p", "l", "e", "x"],
  ["b", "x", "x", "x", "x", "e", "b"],
  ["x", "o", "g", "g", "l", "x", "o"],
  ["x", "x", "x", "D", "T", "r", "a"],
  ["R", "E", "P", "E", "A", "d", "x"],
  ["x", "x", "x", "x", "x", "x", "x"],
  ["N", "O", "T", "R", "E", "-", "P"],
  ["x", "x", "D", "E", "T", "A", "E"],
];

const words = [
  "this", // horizontal
  "is", // horizontal
  "not", // not
  "a", // unique
  "simple", // many ways but horizontal and vertical
  "boggle", // many ways, this is using diagonally
  "board", // horizontal + diagonally
  "test", // not
  "REPEATED", // not, could repeat character
  "NOTRE-PEATED", // horizontal + vertical
];

// const result = boggleBoard(board, words);
// result: this is a simple boggle board NOTRE-PEATED
// console.log(result);

const testCase2 = {
  board: [
    ["y", "g", "f", "y", "e", "i"],
    ["c", "o", "r", "p", "o", "u"],
    ["j", "u", "z", "s", "e", "l"],
    ["s", "y", "u", "r", "h", "p"],
    ["e", "a", "e", "g", "n", "d"],
    ["h", "e", "l", "s", "a", "t"],
  ],
  words: [
    "san",
    "sana",
    "at",
    "vomit",
    "yours",
    "help",
    "end",
    "been",
    "bed",
    "danger",
    "calm",
    "ok",
    "chaos",
    "complete",
    "rear",
    "going",
    "storm",
    "face",
    "epual",
    "dangerous",
  ],
};

console.log(boggleBoard(testCase2.board, testCase2.words));
