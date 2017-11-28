class StatsProvider {
    constructor(level) {
        this.level = level;
    }

    getBaseValue() {
        return this.level + Math.exp(this.level * 0.01);
    }

    getRandomDecreasingNumber(minValue) {
        var value = (90 + (Math.random() * 10)) - (this.getBaseValue() / 5);
        return value > minValue ? value : minValue;
    }
}
