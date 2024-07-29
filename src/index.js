// module.exports = function toReadable(number) {
//     const nums10 = [
//         "zero",
//         "one",
//         "two",
//         "three",
//         "four",
//         "five",
//         "six",
//         "seven",
//         "eight",
//         "nine",
//         "ten",
//         "eleven",
//         "twelve",
//         "thirteen",
//         "fourteen",
//         "fifteen",
//         "sixteen",
//         "seventeen",
//         "eighteen",
//         "nineteen",
//     ];
//     const nums100 = [
//         "hundred",
//         "ten",
//         "twenty",
//         "thirty",
//         "forty",
//         "fifty",
//         "sixty",
//         "seventy",
//         "eighty",
//         "ninety",
//     ];
//     const isZero = (number) => {
//         if (number <= 19) {
//             return nums10[number];
//         } else if (String(number)[0] == 0) {
//             return nums10[String(number)[1]];
//         }
//         return String(number)[1] == 0
//             ? nums100[String(number)[0]]
//             : nums100[String(number)[0]] + " " + nums10[String(number)[1]];
//     };

//     if (number <= 19) {
//         return nums10[number];
//     } else if (number <= 99) {
//         return isZero(number);
//     } else if (number % 100 == 0) {
//         return `${nums10[String(number)[0]]} ${nums100[0]}`;
//     } else if (number <= 999) {
//         return `${nums10[String(number)[0]]} ${nums100[0]} ${isZero(
//             Number(String(number).slice(1))
//         )}`;
//     }
// };

module.exports = function toReadable(number) {
    const obj = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    const str = String(number);
    if (obj[str]) return obj[str];
    if (str.length === 2) return `${obj[str[0] + "0"]} ${obj[str[1]]}`;
    if (str.slice(-2) == "00") return `${obj[str[0]]} hundred`;
    if (obj[str.slice(-2)]) {
        return `${obj[str[0]]} hundred ${obj[str.slice(-2)]}`;
    } else {
        return `${obj[str[0]]} hundred ${obj[str[1] + "0"]} ${
            obj[str[2]]
        }`.replace(/ undefined\s+/g, " ");
    }
};
