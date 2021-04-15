/**
 * there is an array of competitions with different competitors, and a results array that indicates the result of each competition
 * 1, the home team wins, 0 the away team wins
 */

export function tournamentWinner(
  competitions: string[][],
  results: number[]
): string {
  const teams = new Map<string, number>();
  for (let i = 0; i < competitions.length; i++) {
    const competition = competitions[i],
      result = results[i];
    insertToMap(teams, competition[0], result === 1);
    insertToMap(teams, competition[1], result === 0);
  }
  let max = 0, winner = ''
  teams.forEach((value, key) => {
    console.log(key, value)
    if (value > max) {
      max = value;
      winner = key
    }
  })
  console.log(teams);
  return winner;
}

function insertToMap(
  map: Map<string, number>,
  team: string,
  won: boolean
): void {
  if (map.has(team)) {
    if (won) {
      map.set(team, map.get(team)! + 3);
    }
  } else {
    if (won) {
      map.set(team, 3);
    } else map.set(team, 0);
  }
}
