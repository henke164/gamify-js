class MeltingArrowAbility extends BaseAbility
{
    constructor(game, level) {
        super(game, level);
    }

    onShoot() {
        var bowController = this.game.bowController;
        var mainArrow = bowController.arrow;
        mainArrow.destroyOnImpact = false;
        mainArrow.piercings = this.level;
    }

    onEnemyHit(arrow, enemy, renderDamageLabel) {
        if (this.arrowAlreadyHitEnemy(arrow, enemy)) {
            return;
        }

        if (arrow.piercings <= 0) {
            arrow.shouldDestroy = true;
        }
        arrow.piercings--;
    }
}

MeltingArrowAbility.icon = new Texture2D('images/abilities/fire.png', 80);

MeltingArrowAbility.spellName = 'Melting arrow';

MeltingArrowAbility.description = ['Will pierce trough 1 enemy per level.'];
