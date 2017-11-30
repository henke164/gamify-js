class SpeedIncreaseAbility extends BaseAbility
{
    constructor(game, level) {
        super(game, level);
    }

    onShoot() {
        var bowController = this.game.bowController;
        bowController.arrow.speed = (10 * (1 + (0.1 * this.level)) + (bowController.pullDistance / 10));
    }
}

SpeedIncreaseAbility.icon = new Texture2D('assets/abilities/speed-increase.png', 80);

SpeedIncreaseAbility.spellName = 'Arrow speed';

SpeedIncreaseAbility.description = ['Increases arrow speed by 1% each level.'];
