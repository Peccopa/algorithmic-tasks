module.exports = function reverse (n) {
    let result = '';
    n = String(Math.abs(n));
    for (let i = n.length - 1; i >= 0; i--) {
        result += n[i];
    } return result;
}
