
// Q1
function Add() {
  console.log(answer)
  var answer = 2;
}
Add();
// what will be logged?

// ANSWER:
// In javascript variables can be declared after they have been used. This is because var's are hoisted to the top of their functional scope at compile time. Hence a variable can be initialized and used before it has been declared. Here is an example

text = 123;
console.log(text) // this will actually log the number;
var text;

// similarly in the first question, the var will be declared at the top of the functional scope
function Add() {
  var answer;
  console.log(answer)
  answer = 2;
}
// NOTE: only the declarations get moved to the top, not the initializations.

// Q2
var temp = 'hi';
function Add() {
  console.log(temp)
  var temp = 'bye'
}

// what will be logged?

// ANSWER:
/**
 * This will log undefined, as we are re-declaring the variable temp, the declaration will be hoisted to the top of the functional scope.
 */

var temp = "hi";
function display() {
  var temp;
  console.log(temp);
  temp = "bye";
}
display();