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
