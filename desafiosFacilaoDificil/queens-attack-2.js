'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */
function queensAttack(n, k, r_q, c_q, obstacles) {
    const sortedHorizontally = [...obstacles].sort(([firstRow, firstCol], [secondRow, secondCol]) => firstCol - secondCol);
    const sortedVertically = [...obstacles].sort(([firstRow, firstCol], [secondRow, secondCol]) => firstRow - secondRow);

    const greaterVertically = sortedVertically.find(([row, col]) => row > r_q && col === c_q) || [n + 1, c_q];
    const lesserVertically = [...sortedVertically].reverse().find(([row, col]) => row < r_q && col === c_q) || [0, c_q];

    const greaterHorizontally = sortedHorizontally.find(([row, col]) => col > c_q && row === r_q) || [r_q, n + 1];
    const lesserHorizontally = [...sortedHorizontally].reverse().find(([row, col]) => col < c_q && row === r_q) || [r_q, 0];

    const greaterDiagonallyFromBottomLeft = sortedHorizontally.find(([row, col]) => col > c_q && col - c_q === row - r_q) || [r_q + 1 + Math.min(n - r_q, n - c_q), c_q + 1 + Math.min(n - r_q, n - c_q)];
    const lesserDiagonallyFromBottomRight = sortedHorizontally.find(([row, col]) => col > c_q && col - c_q === r_q - row) || [r_q - 1 - Math.min(r_q - 1, n - c_q), c_q + 1 + Math.min(r_q - 1, n - c_q)];

    const lesserDiagonallyFromTopRight = [...sortedHorizontally].reverse().find(([row, col]) => col < c_q && c_q - col === r_q - row) || [r_q - Math.min(r_q, c_q), c_q - Math.min(r_q, c_q)];
    const greaterDiagonallyFromTopLeft = [...sortedHorizontally].reverse().find(([row, col]) => col < c_q && c_q - col === row - r_q) || [r_q + 1 + Math.min(n - r_q, c_q - 1), c_q - 1 - Math.min(n - r_q, c_q - 1)];



    const squaresHorizontally = greaterHorizontally[1] - lesserHorizontally[1] - 2;
    const squaresDiagonallyFromBottomLeft = greaterDiagonallyFromBottomLeft[0] - lesserDiagonallyFromTopRight[0] - 2;

    const squaresVertically = greaterVertically[0] - lesserVertically[0] - 2;
    const squaresDiagonallyFromTopLeft = greaterDiagonallyFromTopLeft[0] - lesserDiagonallyFromBottomRight[0] - 2;

    const totalSquares = squaresDiagonallyFromBottomLeft + squaresDiagonallyFromTopLeft + squaresHorizontally + squaresVertically;
 
    return totalSquares;
}
 console.log(queensAttack(5,2,1,1, [[1,2],[5,2]]))
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const r_q = parseInt(secondMultipleInput[0], 10);

    const c_q = parseInt(secondMultipleInput[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().replace(/\s+$/g, '').split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    const result = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + '\n');

    ws.end();
}
