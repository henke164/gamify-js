class BaseAbility {
    constructor(game, level) {
        this.game = game;
        this.level = level;
    }

    onShoot() {}

    onEnemyHit(arrow, enemy, renderDamageLabel) {}

    onGameWon() {}

    arrowAlreadyHitEnemy(arrow, enemy) {
        return arrow.hits && arrow.hits.indexOf(enemy) > -1;
    }
}
