class StatsProvider {
    constructor(level) {
        this.level = level;
    }

    getBaseValue() {
        return Math.round((4 * (this.level * (3 * 3))) / 5);
    }

    getRandomDecreasingNumber(minValue) {
        var value = (90 + (Math.random() * 10)) - (this.getBaseValue() / 5);
        return value > minValue ? value : minValue;
    }
}
