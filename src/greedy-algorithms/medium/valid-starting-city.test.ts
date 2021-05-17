export function validStartingCity(
  distances: number[],
  fuel: number[],
  mpg: number
) {
  const tankReserves = [0];
  let currentGas = 0;
  let smallest = 0;
  for (let i = 1; i < distances.length; i++) {
    currentGas = currentGas + fuel[i - 1] * mpg - distances[i - 1];
    tankReserves[i] = currentGas;
    smallest = Math.min(smallest, currentGas)
  }
  for (let i = 0; i < distances.length; i++) {
    if (tankReserves[i] === smallest) return i;
  }
  return -1;
}

describe("valid starting city", () => {
  test("should tell me which one is the valid starting city", () => {
    const distances = [5, 25, 15, 10, 15];
    const fuel = [1, 2, 1, 0, 3];
    const mpg = 10;
    expect(validStartingCity(distances, fuel, mpg)).toEqual(4);
  });
  test("should tell me which one is the valid starting city 2", () => {
    const args = {
      distances: [1, 3, 10, 6, 7, 7, 2, 4],
      fuel: [1, 1, 1, 1, 1, 1, 1, 1],
      mpg: 5,
    };
    expect(validStartingCity(args.distances, args.fuel, args.mpg)).toEqual(6);
  });
});
