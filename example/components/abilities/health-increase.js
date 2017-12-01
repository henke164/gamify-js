class HealthIncreaseAbility extends BaseAbility
{
    constructor(game, level) {
        super(game, level);
        this.game.health *= 1 + (0.1 * this.level);
    }
}

HealthIncreaseAbility.id = 5;

HealthIncreaseAbility.icon = new Texture2D('assets/abilities/health.png', 80);

HealthIncreaseAbility.spellName = 'Health';

HealthIncreaseAbility.description = ['Increases health by 10% each level.'];
