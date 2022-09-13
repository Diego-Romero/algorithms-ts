import {processLineByLine} from "./sonar-sweep";

describe('Sonar Sweet', function () {
    it('should work with a small input', async function () {
        await processLineByLine('small-input.txt');
        sonarSweep(lines)
    });
});