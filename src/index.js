module.exports = function toReadable (number) {
    const nums10 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const nums100 = ['hundred', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const isZero = (number) => {
        if (number <= 19) {
            return nums10[number];
        } else if (String(number)[0] == 0) {
            return nums10[String(number)[1]];
        } return String(number)[1] == 0 ? nums100[String(number)[0]] : nums100[String(number)[0]] + ' ' + nums10[String(number)[1]];
    }

    if (number <= 19) {
        return nums10[number];
    } else if (number <= 99) {
        return isZero(number);
    } else if (number % 100 == 0) {
        return `${nums10[String(number)[0]]} ${nums100[0]}`;
    } else if (number <= 999) {
        return `${nums10[String(number)[0]]} ${nums100[0]} ${isZero(Number(String(number).slice(1)))}`;
    }
}
