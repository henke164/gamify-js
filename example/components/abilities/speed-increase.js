class SpeedIncreaseAbility
{
    constructor(game, level) {
        this.game = game;
        this.level = level;
    }

    onShoot() {
        var bowActor = this.game.bowActor;
        bowActor.arrow.speed = (10 * (1 + (0.1 * this.level)) + (bowActor.pullDistance / 10));
    }

    onEnemyHit(arrow, enemy) {}
}

SpeedIncreaseAbility.icon = new Texture2D('images/abilities/speed-increase.png', 80);

SpeedIncreaseAbility.spellName = 'Arrow speed';

SpeedIncreaseAbility.description = ['Increases arrow speed by', '1% each level.'];
