/**
Ideas:
- Have a map with the index of every letter
- Use charCodeAt - n to calculate the number of each 


We could use % 25 to calculate the next one 

a = 97
z = 122


constrains: 
- will only receive lowercase letters.
- non negative integer
*/
  function caesarCipherEncryptor(string, key) {
    if (string.length === 0) return "";
    const split = string.split("");
    const charCodes = split.map((c) => (c.charCodeAt(0) - 97 + key) % 26);
    const newChars = charCodes.map((c) => String.fromCharCode(c + 97));
    return newChars.join("");
  }

describe("ceasar cypher", () => {
  test("it should work", () => {
    expect(caesarCipherEncryptor("xyz", 2)).toEqual("zab");
  });
});

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
