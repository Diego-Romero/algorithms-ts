/**
 * A promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods
 */

// what will be the output of:

var promise = func1();

promise

  .then(function (result1) {
    console.log(result1);
    return func2();
  })

  .then(function (result2) {
    console.log(result2);
    return result2 % 10;
  })

  .then(function (result3) {
    console.log(result3);
  });

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Hello");
    }, 1000);
  });
}

function func2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(50);
    }, 1000);
  });
}
