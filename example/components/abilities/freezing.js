class FreezingArrowAbility extends BaseAbility
{
    constructor(game, level) {
        super(game, level);
    }

    onShoot() {
        var bowController = this.game.bowController;
        var mainArrow = bowController.arrow;
        mainArrow.freezing = true;
    }

    onEnemyHit(arrow, enemy, renderDamageLabel) {
        if (!arrow.freezing){
            return;
        }

        if (this.arrowAlreadyHitEnemy(arrow, enemy)) {
            return;
        }

        if(Math.random() < 0.5) {
            return;
        }

        if (!enemy.originalSpeed) {
            enemy.originalSpeed = enemy.speed;
        }

        if (enemy.stunTimeout) {
            clearTimeout(enemy.stunTimeout);
        }

        enemy.speed = 0;
        enemy.stunTimeout = setTimeout(function() {
            enemy.speed = enemy.originalSpeed;
            clearTimeout(enemy.stunTimeout);
            enemy.stunTimeout = null;
        }, 500 * this.level);
    }
}

FreezingArrowAbility.icon = new Texture2D('images/abilities/freeze.png', 80);

FreezingArrowAbility.spellName = 'Freezing arrow';

FreezingArrowAbility.description = ['Main arrow has a 50% chance to freeze the enemy', 'for 0.5 sec per level.'];
