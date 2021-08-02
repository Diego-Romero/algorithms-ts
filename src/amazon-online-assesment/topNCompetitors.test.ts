/**
Input
The input to the function/method consists of five arguments 
- numCompetitors, an integer representing the number of competitors for the Echo device;
- topNCompetitors, is an integer representing the maximum number of competitors that Amazon wants to identify;
- competitors, a list of strings representing the competitors;
- numReviews, an integer representing the number of reviews from different websites that are identified by the automated webcrawler;
- reviews, a list of string where each element is a string that consists of space-separated words representing user reviews.

Output
Return a list of strings representing Amazon's top N competitors in order of most frequently mentioned to least frequent.

Note
The comparison of strings is case-insensitive. If the value of topNCompetitors is more than the number of competitors discussed in the reviews then output the names of only the competitors mention.
If competitors have the same count (e.g. newshop=2, shopnow=2, mymarket=4), sort alphabetically. topNCompetitors=2, Output=[mymarket, newshop]

Example
Input:
numCompetitors=6
topNCompetitors = 2
competitors = [newshop, shopnow, afashion, fashionbeats, mymarket, tcellular]
numReviews = 6
reviews = [
"newshop is providing good services in the city; everyone should use newshop",
"best services by newshop",
"fashionbeats has great services in the city",
"I am proud to have fashionbeats",
"mymarket has awesome services",
"Thanks Newshop for the quick delivery"]

Output
["newshop", "fashionbeats"]

Explanation
"newshop" is occurring in 3 different reviews. "fashionbeats" is occuring in 2 different user reviews and "mymarket" is occurring in only 1 review.
 */

function topNCompetitors(
  numCompetitors: number,
  topNCompetitors: number,
  competitors: string[],
  numReviews: 6,
  reviews: string[]
) {
  // Return a list of strings representing Amazon's top N competitors in order of most frequently mentioned to least frequent.
  // values are case insensitive, so need to convert them to lowercase
  // every review can only count once
  // if reviews match, we need to return them sorted alphabetically
  // If the value of topNCompetitors is more than the number of competitors discussed in the reviews then output the names of only the competitors mention.
  // would we need to sanitise the string?
  const map = new Map<string, number>();
  for (let competitor of competitors) map.set(competitor, 0);
  for (let review of reviews) {
    const uniqueWords = new Set(review.toLowerCase().split(" "));
    const words = Array.from(uniqueWords);
    for (let word of words) {
      if (map.has(word)) map.set(word, map.get(word)! + 1);
    }
  }
  type Count = [string, number];
  const counts: Count[] = [];
  for (let [key, value] of map.entries()) {
    counts.push([key, value]);
  }

  counts.sort((a, b) => a[0].localeCompare(b[0]));
  counts.sort((a, b) => b[1] - a[1]);

  const topN = counts.slice(0, topNCompetitors);

  return topN.map((c) => c[0]);
}

describe("top N competitors", () => {
  test("should work with example", () => {
    const competitors = [
      "newshop",
      "shopnow",
      "afashion",
      "fashionbeats",
      "mymarket",
      "tcellular",
    ];
    const reviews = [
      "newshop is providing good services in the city; everyone should use newshop",
      "best services by newshop",
      "fashionbeats has great services in the city",
      "I am proud to have fashionbeats",
      "mymarket has awesome services",
      "Thanks Newshop for the quick delivery",
    ];
    const result = ["newshop", "fashionbeats"];
    expect(topNCompetitors(6, 2, competitors, 6, reviews)).toEqual(result);
  });

	test("should work with duplicates", () => {
    const competitors = [
      "newshop",
      "shopnow",
      "afashion",
      "fashionbeats",
      "fashionsense",
      "mymarket",
      "tcellular",
    ];
    const reviews = [
      "newshop is providing good services in the city; everyone should use newshop",
      "best services by newshop",
      "fashionbeats has great services in the city",
      "I am proud to have fashionbeats",
      "mymarket has awesome services",
      "Thanks Newshop for the quick delivery",
      "Thanks fashionSENSE for the quick delivery",
      "great fashionSENSE for the quick delivery FASHIONSENSE",
    ];
    const result = ["newshop", "fashionbeats", "fashionsense"];
    expect(topNCompetitors(6, 3, competitors, 6, reviews)).toEqual(result);
  });
});
