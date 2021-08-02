/**
 
Question:
In order to improve customer experience, Amazon has developed a system to provide recommendations to the customer regarding the item they can purchase. Based on historical customer purchase information, an item association can be defined as - If an item A is ordered by a customer, then item B is also likely to be ordered by the same customer (e.g. Book 1 is frequently orderered with Book 2). All items that are linked together by an item association can be considered to be in the same group. An item without any association to any other item can be considered to be in its own item association group of size 1.

Given a list of item association relationships(i.e. group of items likely to be ordered together), write an algorithm that outputs the largest item association group. If two groups have the same number of items then select the group which contains the item that appears first in lexicographic order.

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
In the available associations, group2 has the largest association. So, the output is [Item1, Item2, Item3, Item4, Item5].
 */

type stringPair = [string, string];

function LargeItemAssociation(associations: string[][]): string[] {
  // const result: string[] = [];
  // for (let association of associations) {
  //   association.sort((a, b) => {
  //     return a.length - b.length || a.localeCompare(b);
  //   });
  // }

  // associations.sort((a, b) => {
  //   return a[0].length - b[0].length || a[0].localeCompare(b[0]);
  // });
  console.log(associations);
	const sets: Set<string>[] = associations.map(a => new Set(a));
	let updated = true;
	while (updated) {
		updated = false;
		let newSet: Set<string>[] = [];
		
		// merge sort as in bubble sort
	}

  // const sets: Set<string>[] = associations.map((a) => new Set(a));
  // // console.log(sets);
  // let joined: Set<string>[] = [];
  // let prev: Set<string> = sets[0];
  // for (let i = 1; i < sets.length; i++) {
  //   // check if this one overlaps with current
  //   const current = sets[i];
  //   let overlap = false;
  //   current.forEach((s) => {
  //     if (prev.has(s)) overlap = true;
  //   });
  //   if (overlap) prev = new Set([...prev, ...current]);
  //   else {
  //     joined.push(prev);
  //     prev = current;
  //   }
  // }
  // console.log(joined, prev);

  // find the largest chain of items that appear
  // if we have same length, we need to sort them, by the one that appears first lexicographically
  // const sets: Set<string>[] = [];

  // for (let association of associations) {
  //   if (sets.length === 0) sets.push(new Set(association));
  //   else {
  //     for (let set of sets) {
  //       let hasOverlap = false;
  //       for (let string of association) if (set.has(string)) hasOverlap = true;
  //       console.log(association, hasOverlap, set);
  //       if (hasOverlap) association.forEach((string) => set.add(string));
  //       else sets.push(new Set(association));
  //     }
  //   }
  //   // console.log(sets);
  // }

  // console.log(sets);

  // we could also have sets that are not linked together yet, we would have to merge them

  return result;
}

describe("LargeItemAssociation", () => {
  test("should work", () => {
    const itemAssociation: stringPair[] = [
      ["Item2", "Item1"],
      ["Item3", "Item4"],
      ["Item4", "Item5"],
    ];
    const result = ["Item3", "Item4", "Item5"];
    expect(LargeItemAssociation(itemAssociation)).toEqual(result);
  });

  test("should work with completely unsorted", () => {
    const itemAssociation: string[][] = [
      ["Item2", "Item1"],
      ["Item12", "Item13", "Item14"],
      ["Item3", "Item4"],
      ["Item7", "Item8", "Item9"],
      ["Item4", "Item5"],
      ["Item5", "Item2"],
    ];
    const result = ["Item1", "Item2", "Item3", "Item4", "Item5"];
    expect(LargeItemAssociation(itemAssociation)).toEqual(result);
  });
});
