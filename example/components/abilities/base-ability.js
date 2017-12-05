class BaseAbility {
    constructor(scene, level) {
        this.scene = scene;
        this.level = level;
    }

    onShoot() {}

    onEnemyHit(arrow, enemy, renderDamageLabel) {}

    onGameWon() {}
}
