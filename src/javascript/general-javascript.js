function Add() {
  console.log(answer); // undefined
  var answer = 2;
}

// call, bind and apply
var animal = {
  animalInfo: function () {
    return `${this.name} is ${this.age} years old`;
  },
};

var cat = {
  name: "tom",
  age: 5,
};
console.log(animal.animalInfo.call(cat)); // bind the scope of cat into it and call the function

var animal = {
  animalInfo: function (sound, food) {
    return (
      this.name +
      " is " +
      this.age +
      " years old" +
      " . He makes the sound " +
      sound +
      " and eats " +
      food
    );
  },
};

var cat = {
  name: "Tom",
  age: 5,
};
console.log(animal.animalInfo.apply(cat, ["meow", "fish"]));

// ----------------------------------------------------------------------------
/**
<style>
button {font-size: 50px; }
.on {background: #ff0000;}
</style>

<button id="pushy">Click me</button>
 */

const button = document.querySelector("#pushy");
button.addEventListener("click", () => {
  console.log(this); // arrow functions will inherit this from the parent scope from where its called
  // in this case this will refer to the window
  this.classList.toggle("on"); // this will throw an error as the there won't be a classList in the window object
});

button.addEventListener("click", function () {
  console.log(this); //`this` refers to the button, as the scope has been bounded to the element clicked
  this.classList.toggle("on");
});

// is also worth noting that for arrow functions the methods bind, apply and call won't work as the
// scope of this can not be changed from the parent.

// Changing the context of this using bind, call and apply.

// Call helps you change the context of this in an invoking function

// Apply is very similar to call, but you can pass the arguments in a function

// Bind is a function that helps you call a function that you can execute later with a different value of this.

// call example

const obj = {
  num: 2,
};
function add(n, m) {
  return this.num + n;
}
add.call(obj, 3, 4); // 9

// in the same apply works, except that we pass and array of arguments
console.log(add.apply(obj, [3, 4]));

// now bind does the same but it doesn't executes the function immediately.
const funcToExecLater = add.bind(obj, 3, 5);

console.log(funcToExecLater());

/**
 * Closures
 *
 * A closure is the combination of a function bundled together (enclosed) with
 * references to its surrounding state (the lexical environment).
 * In other words, a closure gives you access to an outer function's
 * scope from an inner function. In JavaScript, closures are created
 * every time a function is created, at function creation time.
 */

function init() {
  var name = "diego";
  function testing() {
    console.log("yoo", diego);
  }
  testing();
}

// A higher order function is a function that either accepts a function as a parameter or returns a function as an output.

/**
 * Currying:
 */

// function multiply(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     }
//   }
// }

const multiply = (a) => (b) => (c) => a * b * c;

console.log(multiply(3)(2)(9));
