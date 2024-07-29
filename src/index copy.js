function reverse(n) {
    // let result = '';
    // n = String(Math.abs(n));
    // for (let i = n.length - 1; i >= 0; i--) {
    //     result += n[i];
    // } return result;
    // return Number(String(n).split("").reverse());
    return +String(n).split("").reverse().join("");
}

console.log(reverse(123));
