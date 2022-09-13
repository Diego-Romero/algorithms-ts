// import fs from 'fs';
// import readline from "readline";
const fs = require('fs')
const readline = require('readline')

function readFile(name) {
    const rl = readline.createInterface({
        input: fs.createReadStream(name),
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        console.log(`Line from file: ${line}`);
    });
}


describe('Sonar Sweet', function () {
    it('should work with a small input', function () {
        readFile('small-input.txt')
        // sonarSweep(lines)
    });
});