class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.num;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.num = Math.ceil(this.min + (this.max - this.min) / 2);
        return this.num;
    }

    lower() {
        this.min = this.min;
        this.max = this.num;
    }

    greater() {
        this.min = this.num;
        this.max = this.max;
    }
}

module.exports = GuessingGame;
