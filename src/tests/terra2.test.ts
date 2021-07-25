/**
 * Goal:
 * to import the JSON]
 * Analyze and understand how the json is structured
 * produce another JSON file with one user and its total distance
 */

import { data } from "./daily_raw";

function getTotalDistance(userId: number): number {
  const map = new Map<number, string[]>();
  const ids = data.Id;
  for (let key of Object.keys(ids)) {
    const index: number = ids[key] as number;
    map.set(index, map.get(index) ? map.get(index) : [key]); // { 1503242: ["0", "1", "2"]}
  }

  const totalDistance = data.TotalDistance;
  const userValues: string[] = map.get(userId);
	let total = 0;
	for (let value of userValues) {
		total += totalDistance[value];
	}

	return total;
}

describe("testing", () => {
  // map user id, [number]
  console.log(data);
});
