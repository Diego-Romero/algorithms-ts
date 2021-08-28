const person = {
  firstName: "John",
  lastName: "Doe",
  printName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

// this will print john doe

const print = person.printName();
print(); // this print undefined undefined

// a working example of how we could use call bind and apply
const john = {
  name: "John",
  age: 24,
};
const jane = {
  name: "Jane",
  age: 22,
};

function greeting() {
  console.log(`hi, name: ${this.name}, age: ${this.age}`);
}

const obj = {
  name: "diegl",
};
function fn() {
  console.log(this.name);
}
const binded = fn.bind(obj);
console.log(binded());

const info = function (a, b, c) {
  const string = `${this.name} likes to eat ${a}, ${b}, ${c}`;
  return string;
};
const bound = info.bind(obj, "pasta");
console.log(bound("second", "third"));

const greetingJohn = greeting.bind(john);
const greetingJane = greeting.bind(Jane);

// another example. This way we would actually make the counter increase, but if we didnt do the binding, this context would be the one from the button function
const counter = {
  count: 0,
  incrementCounter: function () {
    console.log(this);
    this.count++;
  },
};
document
  .querySelector(".btn")
  .addEventListener("click", counter.incrementCounter.bind(counter));

// we could also pass extra arguments to the bind function
function greeting(lang) {
  console.log(`in lang: ${lang}, name: ${this.name}`);
}

const x = greeting.bind(john, "english");

// call function, the main difference from bind, is that call automatically calls the function and does not creates a copy of the function like bind does.

function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}

greeting.call(john); // will automatically call the function
// is important to notice that call can also accept arguments - in the same way as bind.

// finally apply, is the same as call but it accepts the arguments in an array
function greet(greeting, lang) {
  console.log(lang);
  console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}

greet.apply(john, ["hi", "en"]); // will automatically call it and use the arguments in the array
