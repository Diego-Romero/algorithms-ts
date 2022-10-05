function describe(testSuiteName, func) {
  const start = `beginning test suite ${testSuiteName}`;
  console.log(start);
  try {
    func();
    console.log(`successfully completed test suite ${testSuiteName}`);
  } catch (error) {
    const { testCaseName, errorMessage } = error;
    console.error(
      `failed running test suite ${testSuiteName} on test case ${testCaseName} with error message ${errorMessage}`
    );
  }
}

function it(testCaseName, func) {
  console.log(`beginning test case ${testCaseName}`);
  try {
    func();
    console.log(`successfully completed test case ${testCaseName}`);
  } catch (errorMessage) {
    throw { testCaseName, e: errorMessage };
  }
}

function expect(input) {
  // I can simply return the class here.
  return new Expect(input);
}

class Expect {
  constructor(input) {
    this.input = input;
    this.stringified = JSON.stringify(input);
  }

  toExist = () => {
    if (this.input === null)
      throw `expected value to exist but got ${this.stringified}`;
  };

  toBe = (expected) => {
    if (this.input !== expected)
      throw `expected ${this.stringified} to be ${JSON.stringify(expected)}`;
  };

  toBeType = (type) => {
    if (typeof this.input !== type)
      throw `expected ${
        this.stringified
      } to be of type ${type} but got ${typeof this.input}`;
  };
}
