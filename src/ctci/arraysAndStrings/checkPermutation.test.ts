function checkPermutation(s1: string, s2: string) {
	if (s1.length !== s2.length) return false;
	const chars = new Map<string, number>()	
	for (let c of s1.split('')) chars.set(c, !chars.get(c) ? 1 : chars.get(c)! + 1)

	for (let c of s2.split('')) {
		const val = chars.get(c);
		if (!val || val - 1 < 0) return false;
		chars.set(c, val - 1);
	}

	return true;
}


describe('check permutations', () => {
	test('should work', () => {
		// expect(checkPermutation('abcd', 'bcda')).toBeTruthy()
		expect(checkPermutation('aabcd', 'bcada')).toBeTruthy()
	})

	test("should not work", () => {
    expect(checkPermutation("abcd", "bcdx")).toBeFalsy();
  });
	
})
