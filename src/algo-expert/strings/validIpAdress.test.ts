export function validIPAddresses(string: string) {
  if (string.length < 4) return [];
  const result: string[] = [];
  const recurse = (index: number, dots: number, ip: string) => {
    if (dots === 3) {
      if (validIp(ip)) result.push(ip);
      // console.log("we have 3 dots", ip);
      // check if is valid and return
    } else {
      // need to start adding dots at index + 1
      const lastIndex = index + 3;
      for (let i = index; i < lastIndex; i++) {
        const newIp: string = ip.substring(0, i) + "." + ip.substring(i);
        recurse(i + 2, dots + 1, newIp);
      }
    }
  };
  // Write your code here.
  recurse(1, 0, string);

  return result;
}

function validIp(string: string) {
  const split = string.split(".");
  // need to check number between 0 and 255, and no trailing 0s
  if (split.length !== 4) return false;
  // console.log(split);
  for (let number of split) {
    if (!number.length) return false;
    if (number.length > 1 && number[0] === "0") return false;
    const parsed = parseInt(number);
    if (parsed < 0 || parsed > 255) return false;
  }
  return true;
}

describe("validIPAddresses", () => {
  test("should test valid IP addresses", () => {
    console.log(validIPAddresses("1921680"));
  });

  test("should validate a single ip", () => {
    console.log(validIp("1.9.216.80"));
    expect(validIp("1.9.216.80")).toBeTruthy();
  });
  test("should return false on negative IPS", () => {
    expect(validIp("1.256.9.0")).toBeFalsy();
    expect(validIp("1.01.9.0")).toBeFalsy();
    expect(validIp("19.216.80.")).toBeFalsy();
  });
});

/**
"1921680"
"1.92.168.0"
need to add up to 3 dots
need to add a dot up to 3 valid positions
whenever we get a valid ip, we append it to the results
need to go around checking that the numbers are valid as we move along
 */
