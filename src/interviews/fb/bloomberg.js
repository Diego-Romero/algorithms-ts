function bl() {
  // functions can be curried
}

console.log(bl()()("mberg")); // bloomberg
console.log(bl()()()("mberg")); // blooomberg
console.log(bl()("mberg")); // blomberg
