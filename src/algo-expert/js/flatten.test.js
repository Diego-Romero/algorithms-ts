function flatten(value) {
  if (typeof value !== "object" || value === null) return value;

  if (Array.isArray(value)) return flattenArray(value);

  return flattenObject(value);
}

function flattenArray(array) {
  return array.reduce((acc, curr) => acc.concat(flatten(curr)), []);
}

function flattenObject(object) {
  const flattened = {};

  for (const [key, value] of Object.entries(object)) {
    const valueIsObject =
      typeof value === "object" && value !== null && !Array.isArray(value);
    const flattenedValue = flatten(value);
    if (valueIsObject) Object.assign(flatten, flattenedValue);
    else flattened[key] = flattenedValue;
  }
  return flattened;
}

// Do not edit the line below.
exports.flatten = flatten;

describe("flatten", () => {
  test("should work with arrays", () => {
    const input = [1, 2, [[3, 4], 5], [[[6, 7], 8]]];
    expect(flatten(input)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("should work with objects", () => {});
});
