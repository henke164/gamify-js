class MeltingArrowAbility extends BaseAbility
{
    constructor(scene, level) {
        super(scene, level);
    }

    onShoot() {
        var bowController = this.scene.bowController;
        var mainArrow = bowController.arrow;
        mainArrow.destroyOnImpact = false;
        mainArrow.piercings = this.level;
    }

    onEnemyHit(arrow, enemy, renderDamageLabel) {
        if(arrow.speed > 40) {
            var damage = Math.round(arrow.speed * arrow.power * 2);
            enemy.reduceHealth(damage);
            renderDamageLabel(damage, new Vector2(arrow.position.x, arrow.position.y + 10), { r:255, g:255, b:0 });
        }

        if (arrow.piercings <= 0) {
            arrow.destroy();
        }


        arrow.piercings--;
    }
}

MeltingArrowAbility.id = 6;

MeltingArrowAbility.icon = new Texture2D('assets/abilities/melting.png', 80);

MeltingArrowAbility.spellName = 'Melting arrow';

MeltingArrowAbility.description = 'Main arrow pierce trough 1 enemy per level and deal additional 200% damage.';
