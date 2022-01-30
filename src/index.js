const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    while(expr.length % 10 != 0){
        expr += '0';
    }

    console.log(expr);

    const temp = [];
    for(let i = 0; i < expr.length; i++){
        temp[i] = expr[i];
    }

    const arrLeters = [];
    while(temp.length >= 10){
        arrLeters.push(temp.splice(0, 10));
    }

    const doubleStr = [];
    for(let i = 0; i < arrLeters.length; i++){
        doubleStr[i] = [];
        while(arrLeters[i].length >= 2){
            doubleStr[i].push(arrLeters[i].splice(0, 2).join(''));
        }
    }

    const dashesAndDotsArr = [];
    for(let i = 0; i < doubleStr.length; i++){
        dashesAndDotsArr[i] = [];
        for(let y = 0; y < doubleStr[i].length; y++){
            if(doubleStr[i][y] === '10'){
                dashesAndDotsArr[i][y] = '.';
            } else if(doubleStr[i][y] === '11') {
                dashesAndDotsArr[i][y] = '-';
            } else if(doubleStr[i][y] === '**'){
                dashesAndDotsArr[i][y] = ' ';
            } else {
                dashesAndDotsArr[i][y] = '';
            }
        }
    }

    const strDashes = [];
    for(let i = 0; i < dashesAndDotsArr.length; i++){
        strDashes.push(dashesAndDotsArr[i].join(''));
    }


    let result = '';
    for(let i = 0; i < strDashes.length; i++){
        if(MORSE_TABLE[strDashes[i]] === undefined){
            result += ' ';
        } else {
            result = result + MORSE_TABLE[strDashes[i]];
        }
    }
    return result;
}

module.exports = {
    decode
}