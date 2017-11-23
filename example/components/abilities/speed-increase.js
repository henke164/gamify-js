class SpeedIncreaseAbility
{
    constructor(game, level) {
        this.game = game;
        this.level = level;
    }

    onShoot() {
        var bowController = this.game.bowController;
        bowController.arrow.speed = (10 * (1 + (0.1 * this.level)) + (bowController.pullDistance / 10));
    }

    onEnemyHit(arrow, enemy) {}
}

SpeedIncreaseAbility.icon = new Texture2D('images/abilities/speed-increase.png', 80);

SpeedIncreaseAbility.spellName = 'Arrow speed';

SpeedIncreaseAbility.description = ['Increases arrow speed by', '1% each level.'];
