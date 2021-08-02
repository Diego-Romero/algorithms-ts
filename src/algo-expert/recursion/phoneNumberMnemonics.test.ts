const digitsMap: { [key: number]: string[] } = {
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
  0: ["0"],
};

// O(N * 4 ^ N) time and space, where N is the number of digits, the reason for 4 is because, for every digit we expand 4 times.
export function phoneNumberMnemonics(phoneNumber: string) {
  const queue: string[] = [""];
  for (let number of phoneNumber.split("")) {
    // we need to add every digit, to the list of strings in the queue
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const string = queue.shift();
      const digits: string[] = digitsMap[parseInt(number)];
      for (let digit of digits) {
        queue.push(string + digit);
      }
    }
  }

  return queue;
}

/**
- Given a stringified phone number, > 0 length, write a function that returns all the mnemonics that you can generate with that number
- examples: 
1905
1
0
19

- iterate through every char of the number, if it has digits we ne

*/
