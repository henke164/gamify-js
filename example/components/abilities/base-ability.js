class BaseAbility {
    constructor(game, level) {
        this.game = game;
        this.level = level;
    }

    onShoot() {}

    onEnemyHit(arrow, enemy, renderDamageLabel) {}

    onGameWon() {}
}
