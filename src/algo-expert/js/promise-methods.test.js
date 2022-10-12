/*
Takes an array of promises and whenever any of these promises resolve or rejects we return only the result of that one
This should only have the value of the first promise

Approach
Brute force: resolve all the promises and put them in an array in the ordered that they resolved. Return the first value.
Better: call all promises, as soon as one resolves we could store in the result and find a way to stop all the other promises that haven't resolved.
*/
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

Promise.myAny = function (promises) {
  // Write your code here.
};

Promise.myAll = function (promises) {
  // Write your code here.
};

Promise.myAllSettled = function (promises) {
  // Write your code here.
};

describe("promise methods", () => {
  describe("my race", () => {
    test("should work if all the promises resolve and return the first one", async () => {
      const promises = [
        new Promise((res, rej) => setTimeout(() => res(10), 500)),
        new Promise((res, rej) => res(5)),
        new Promise((res, rej) => setTimeout(() => res(20), 300)),
      ];
      const result = Promise.myRace(promises);
      expect(result).toEqual(5);
    });
    // test("should work if all the promises resolve and return the first one", async () => {
    //   const promises = [
    //     new Promise((res, rej) => setTimeout(() => res(10), 500)),
    //     new Promise((res, rej) => rej(5)),
    //     new Promise((res, rej) => setTimeout(() => res(20), 300)),
    //   ];
    //   const result = Promise.myRace(promises);
    //   expect(result).toEqual(5);
    // });
  });
});
