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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    var monthJulin = [
        {id:"January", dias:31}, {id:"February", dias:29}, {id:"March",dias:31},
        {id:"April",dias:30}, {id:"May",dias:31}, {id:"June",dias:30}, 
        {id:"July",dias:31}, {id:"August",dias:30}, {id:"September",dias:31}, 
        {id:"October",dias:30}, {id:"November",dias:31}, {id:"December",dias:30}
    ]
    var monthGreg = [
        {id:"January",dias:31}, {id:"February",dias:28}, {id:"March",dias:31},
        {id:"April",dias:30}, {id:"May",dias:31}, {id:"June",dias:30}, 
        {id:"July",dias:31}, {id:"August",dias:31}, {id:"September",dias:30}, 
        {id:"October",dias:31}, {id:"November",dias:30}, {id:"December",dias:31}
    ]
   
    var diaProgramador = 256
    var somaDias = 0
    var mes = 0
    function somaDosDias(calendario){
        for (var i = 0; i <= calendario.length; i++){
            mes++
            if(somaDias < diaProgramador ){
                somaDias = somaDias + calendario[i].dias
            }
            if(somaDias > diaProgramador){
                somaDias = somaDias - calendario[i].dias
                break;
            }
        }
    }


    if(year < 1918){
        if(year % 4 == 0){
            //bissexto
            monthJulin[1].dias = 30;
            somaDosDias(monthJulin);
        } else{
            somaDosDias(monthJulin);
        }
    }

    if(year == 1918){
        monthGreg[1].dias = 15;
        somaDosDias(monthGreg);
    }
    
    if (year >= 1919){
        if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){
            //bissexto
            monthGreg[1].dias = 29;
            somaDosDias(monthGreg);
        }else{
            somaDosDias(monthGreg);
        } 
    }

    var dia = diaProgramador - somaDias;
    if(mes<=9){
        mes = "0"+mes 
    }
    return dia + "." + mes + "." + year;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
