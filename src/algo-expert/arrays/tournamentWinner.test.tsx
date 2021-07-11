export function tournamentWinner(competitions: string[][], results: number[]) {
	const map = new Map<string, number>();
	let maxAmount = 0;
	let winner = "";
	for (let i = 0; i < competitions.length; i++) {
		// insert to the map first
		const [first, second] = competitions[i];
		// console.log(first, second)
		// set them to 0 on the first pass if they dont exist yet
		if (!map.get(first)) map.set(first, 0)
		if (!map.get(second)) map.set(second, 0)
		
		// update the winner
		const result = results[i];
		result === 1 ? 
			map.set(first, map.get(first)! + 3) : 
			map.set(second, map.get(second)! + 3);
		
		// check if we have a new highest score
		const updatedFirst = map.get(first)!;
		const updatedSecond = map.get(first)!;
		if (updatedFirst > maxAmount) {
			maxAmount = updatedFirst;
			winner = first;
		}
		if (updatedSecond > maxAmount) {
			maxAmount = updatedSecond;
			winner = second;
		}
		
	}
  
  return winner;
}

/**

competitions = [
	[a, b],
	[b, c],
	[c, a]
]

result = [0, 0, 1];

- will always receive the same amount of result/competition
- what does it happen in case of draw?
- always more than one team
- all teams compete at least once
- always one team will win the tournament
- will result always be 0 or 1?

{
	a: 0,
	b: 3,
	c: 6
}

winner is 6
*/