class FrostArrowAbility extends BaseAbility
{
    constructor(game, level) {
        super(game, level);
    }

    onEnemyHit(arrow, enemy, renderDamageLabel) {
        if (!enemy.originalSpeed) {
            enemy.originalSpeed = enemy.speed;
        }

        if (enemy.slowDownTimeout) {
            clearTimeout(enemy.slowDownTimeout);
        }

        if (enemy.speed == 0) {
            return;
        }

        enemy.speed = enemy.originalSpeed * (0.60 - (0.05 * this.level));
        enemy.slowDownTimeout = setTimeout(function() {
            enemy.speed = enemy.originalSpeed;
            clearTimeout(enemy.slowDownTimeout);
            enemy.slowDownTimeout = null;
        }, 1000 + (200 * this.level));
    }
}

FrostArrowAbility.icon = new Texture2D('images/abilities/frost.png', 80);

FrostArrowAbility.spellName = 'Frost arrow';

FrostArrowAbility.description = ['Slow down enemy by 20% for 1 second + 0.2 seconds', 'per level.'];
