class SpeedIncreaseAbility extends BaseAbility
{
    constructor(scene, level) {
        super(scene, level);
    }

    onShoot() {
        var bowController = this.scene.bowController;
        var multiplier = this.level * 0.1;
        bowController.arrow.speed += (bowController.arrow.speed * multiplier);
    }
}

SpeedIncreaseAbility.id = 8;

SpeedIncreaseAbility.icon = new Texture2D('assets/abilities/speed-increase.png', 80);

SpeedIncreaseAbility.spellName = 'Arrow speed';

SpeedIncreaseAbility.description = 'Increases arrow speed by 1% each level.';
