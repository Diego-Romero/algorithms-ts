function currying(func) {
  // until I get 3 arguments, keep returning a function
  function recurse(...params) {
    console.log(params);
    if (params.length === 3) {
      return func(...params);
    } else {
      return function (...next) {
        return recurse(...params, ...next);
      };
    }
  }

  return recurse;
}

const multiply3Numbers = (a, b, c) => a * b * c;
const output = currying(multiply3Numbers);
console.log(output(2)(3)(4));

// describe("writting my own currying function", () => {
//   const multiply3Numbers = (a, b, c) => a * b * c;
//   test("should work", () => {
//     const output = currying(multiply3Numbers);
//     console.log(output(2, 3, 4));
//   });

//   test("should test object freeze", () => {
//     "use strict";
//     let person = {
//       name: "Nishant",
//     };
//     Object.freeze(person);
//     Object.seal(person);

//     function func() {
//       try {
//         person.name = "xyz";
//       } catch (e) {
//         console.log("Cannot change the name");
//       }
//       person.age = 30;
//       delete person.name;
//       console.log(person.name);
//       console.log(person.age);
//       console.log(person.name);
//     }
//     console.log(func());
//   });
// });
