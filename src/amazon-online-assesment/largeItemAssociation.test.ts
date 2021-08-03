/**
 
Question:
In order to improve customer experience, Amazon has developed a system to provide 
recommendations to the customer regarding the item they can purchase. 
Based on historical customer purchase information, an item association can be defined as 
- If an item A is ordered by a customer, then item B is also likely to be ordered 
by the same customer (e.g. Book 1 is frequently orderered with Book 2). All items that
 are linked together by an item association can be considered to be in the same group. 
 An item without any association to any other item can be considered to be in its own 
 item association group of size 1.

Given a list of item association relationships(i.e. group of items likely to be ordered together), 
write an algorithm that outputs the largest item association group. 
If two groups have the same number of items then select the group which contains the item that appears first 
in lexicographic order.

Input
The itput to the function/method consists of an argument - itemAssociation, a list containing paris of string representing the items that are ordered together.

Output
Return a list of strings representing the largest association group sorted lexicographically.

Example
Input:
itemAssociation: [
[Item1, Item2],
[Item3, Item4],
[Item4, Item5]
]

Output:
[Item3, Item4, Item5]

Explanation:
There are two item association groups:
group1: [Item1, Item2]
group2: [Item3,Item4,Item5]
In the available associations, group2 has the largest association. So, the output is [Item3, Item4, Item5].

Explanation:
There are two item association groups:
group1: [Item1, Item2]
group2: [Item2,Item5]
group3: [Item3,Item4,Item5]
group4: [Item7,Item8,Item9]
group5: [Item12,Item18]
{
  item1: item2,
  item2: item5,
  item3: item4,
  item4: item5,
  item7: item8,
  item8, item9,
  item12: item18
}
In the available associations, group2 has the largest association. So, the output is [Item1, Item2, Item3, Item4, Item5].



Example
Input:
itemAssociation: [
[Item1, Item2],
[Item3, Item4],
[Item4, Item5]
]

{
  item1: item2,
  item3: item4,
  item4, item5
}

Output:
[Item3, Item4, Item5]
 */

type stringPair = [string, string];

function LargeItemAssociation(associations: string[][]): string[] {
  const result: string[] = [];

  // find a way to create all the associations
  const associationsMap: { [key: string]: string } = {};
  for (let association of associations) {
    associationsMap[association[0]] = association[1];
  }
  console.log(associationsMap);
  const paths: string[][] = [];
  for (let [key, value] of Object.entries(associationsMap)) {
    let path: string[] = [key, value];
    let iterator = value;
    while (associationsMap[iterator]) {
      iterator = associationsMap[iterator];
      path.push(iterator);
    }
    paths.push(path);
  }
  paths.sort((a, b) => a[0].localeCompare(b[0]));
  paths.sort((a, b) => b.length - a.length);

  console.log(paths);

  return paths[0];
}

describe("LargeItemAssociation", () => {
  test("should work", () => {
    const itemAssociation: stringPair[] = [
      ["Item1", "Item2"],
      ["Item3", "Item4"],
      ["Item4", "Item5"],
    ];
    const result = ["Item3", "Item4", "Item5"];
    expect(LargeItemAssociation(itemAssociation)).toEqual(result);
  });

  test("should work with completely unsorted", () => {
    const itemAssociation: stringPair[] = [
      ["Item1", "Item2"],
      ["Item12", "Item13"],
      ["Item3", "Item4"],
      ["Item7", "Item8"],
      ["Item4", "Item5"],
      ["Item2", "Item3"],
    ];
    const result = ["Item1", "Item2", "Item3", "Item4", "Item5"];
    expect(LargeItemAssociation(itemAssociation)).toEqual(result);
  });
  test("should work when there are two of the same length", () => {
    const itemAssociation: stringPair[] = [
      ["Item3", "Item4"],
      ["Item4", "Item5"],
      ["Item1", "Item2"],
      ["Item2", "Item9"],
    ];
    const result = ["Item1", "Item2", "Item9"];
    expect(LargeItemAssociation(itemAssociation)).toEqual(result);
  });
});
