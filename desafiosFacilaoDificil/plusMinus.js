'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    var positivo = 0;
    var negativo = 0;
    var zero = 0;

    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            positivo++;
        } else if (arr[i] < 0) {
            negativo++;
        } else { zero++ };
    }
    var total = arr.length;
    var totalPositivo = (positivo / total).toFixed(6);
    var totalNegativo = (negativo / total).toFixed(6);
    var totalZero = (zero / total).toFixed(6);

    console.log(totalPositivo);
    console.log(totalNegativo);
    console.log(totalZero);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
