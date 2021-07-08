// They are something new introduced in ES6, anonymous functions which have a implicit return type.
// they also bind this lexically; meaning since they dont have their own content in which they execute, this gets inherited from the parent function, hence they dont have their own this value. Also arrow functions are not constructible. Unlike regular functions, arrow functions can't have same name parameters.


let me = {
  name: "Ashutosh Verma",
  thisInArrow: () => {
    console.log("My name is " + this.name); // no 'this' binding here
  },
  thisInRegular() {
    console.log("My name is " + this.name); // 'this' binding works here
  },
};
me.thisInArrow(); // My name is
me.thisInRegular(); // My name is Ashutosh Verma

// the act of inheriting this context from the parent is called lexical scoping, also call bind or apply can't change the value of this.
const button = document.querySelector("#pushy");
button.addEventListener("click", () => {
  console.log(this); //`this` refers to window
  this.classList.toggle("on");
});

const button = document.querySelector("#pushy");
button.addEventListener("click", function () {
  console.log(this); //`this` refers to the button
  this.classList.toggle("on");
});