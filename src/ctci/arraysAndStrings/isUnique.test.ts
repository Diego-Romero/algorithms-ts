
function isUnique(string: string) {
	const set = new Set();
	for (let c of string.split('')) {
		if (set.has(c)) return false;
		set.add(c);
	}

	return true;
}

describe('ctci is unique', () => {
	test('should work', () => {
		const example = 'abcdxa';
		expect(isUnique(example)).toBeFalsy()
		expect(isUnique('examplu')).toBeTruthy()
	})
	
})
