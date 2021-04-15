import { tournamentWinner } from "./tournament-winner";

describe("tournament winner", () => {
  it("should return the square of numbers", () => {
    expect(tournamentWinner([['a', 'b'], ['b', 'c'], ['c', 'a']], [0, 0, 1])).toEqual('c')
  });
});
