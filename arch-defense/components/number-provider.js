class NumberProvider {
    static getBaseNumberForLevel(level) {
        return level + Math.exp(level * 0.01)
    }
}
