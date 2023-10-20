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
    const result1 = [];
    const result2 = [];
    let result3 = '';
    for (let i = 0; i < expr.length; i = i + 10) {
        result1.push(expr.substring(i, i + 10));
    }
    result1.forEach(element => {
        let symb = '';
        for (let i = 0; i < element.length; i += 2) {
            if (element[i] == 1 && element[i + 1] == 0) {
                symb += '.';
            }
            if (element[i] == 1 && element[i + 1] == 1) {
                symb += '-';
            }
        }
        result2.push(symb);
    });
    result2.forEach(element => {
        if (element.length === 0) {
            result3 += ' ';
        } else {
            result3 += MORSE_TABLE[element];
        }
    });

    return result3;
}

module.exports = {
    decode
}