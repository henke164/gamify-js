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
        
        var damage = Math.round(arrow.speed * arrow.power * 2);
        enemy.reduceHealth(damage);
        renderDamageLabel(damage, new Vector2(arrow.position.x, arrow.position.y + 10), { r:255, g:255, b:0 });

        if (arrow.piercings <= 0) {
            arrow.shouldDestroy = true;
        }


        arrow.piercings--;
    }
}

MeltingArrowAbility.icon = new Texture2D('images/abilities/melting.png', 80);

MeltingArrowAbility.spellName = 'Melting arrow';

MeltingArrowAbility.description = ['Main arrow pierce trough 1 enemy per level and deal additional 200% damage.'];
