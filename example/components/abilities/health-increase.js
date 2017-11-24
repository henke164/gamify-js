class HealthIncreaseAbility
{
    constructor(game, level) {
        this.game = game;
        this.level = level;
        this.game.health *= 1 + (0.1 * this.level);
    }

    onShoot() {}

    onEnemyHit(arrow, enemy) {}
}

HealthIncreaseAbility.icon = new Texture2D('images/abilities/health.png', 80);

HealthIncreaseAbility.spellName = 'Health';

HealthIncreaseAbility.description = ['Increases health by', '10% each level.'];
