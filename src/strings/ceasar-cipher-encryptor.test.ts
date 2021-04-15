/**
 * Write a Ceasar Cipher encryptor that provided a string and an integer, it will shift the string by the integer provided.
 * You will only receive a lowercase string
 * 
 * CQ:
 * - what do we do on empty string?
 * - could we get any numbers?
 * - 0 just means return the same string right?
 * - Do we also accept negative numbers?
 */
const START = 97
// in ASCII a is 97, whilst z is 122
export function caesarCipherEncryptor(string: string, key: number) {
  let result = ""
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const charCodeAt = getCharCode(string, i)
    const newCharCode = (charCodeAt + key) % 26; // new char code from 0 to 25
    const newChar = stringFromCharCode(newCharCode )
    console.log('charcode', char, charCodeAt, newChar)
    result += newChar;
  }
  return result;
}

// this makes it so a === 0, b === 1, etc.
function getCharCode(string: string, i: number) {
  return string.charCodeAt(i) - START; // there are 25 lowercase chars in the english alphabet
}
function stringFromCharCode(code: number) {
  return String.fromCharCode(code + START)
}

describe('Caesar Cipher Encryptor', () => {
  test('should encrypt based on the key', () => {
    expect(caesarCipherEncryptor('abc', 2)).toEqual('cde')
    expect(caesarCipherEncryptor('xyz', 2)).toEqual('zab')
  })
  
  
})
