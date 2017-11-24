class FrostArrowAbility extends BaseAbility
{
    constructor(game, level) {
        super(game, level);
    }

    onEnemyHit(arrow, enemy, renderDamageLabel) {
        if (this.arrowAlreadyHitEnemy(arrow, enemy)) {
            return;
        }

        if (!enemy.originalSpeed) {
            enemy.originalSpeed = enemy.speed;
        }

        if (enemy.slowDownTimeout) {
            clearTimeout(enemy.slowDownTimeout);
        }

        enemy.speed = enemy.originalSpeed * (0.60 - (0.05 * this.level));
        enemy.slowDownTimeout = setTimeout(function() {
            enemy.speed = enemy.originalSpeed;
            clearTimeout(enemy.slowDownTimeout);
            enemy.slowDownTimeout = null;
        }, 1000 + (500 * this.level));
    }
}

MeltingArrowAbility.icon = new Texture2D('images/abilities/melting.png', 80);

MeltingArrowAbility.spellName = 'Melting arrow';

MeltingArrowAbility.description = ['Will pierce trough 1 enemy per level.'];
