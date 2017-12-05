class DefaultAbility extends BaseAbility
{
    constructor(scene) {
        super(scene, 99);
    }

    onShoot() {
        var bowController = this.scene.bowController;

        if (bowController.arrow.speed == 0) {
            bowController.arrow.speed = 10 + (bowController.pullDistance / 10);
        }

        bowController.arrow.speed = 30;

        bowController.arrow.velocity = Vector2.direction(
            bowController.arrow.position, bowController.startPullLocation);
        bowController.pullDistance = 0;
    }

    onEnemyHit(arrow, enemy, renderDamageLabel) {
        var damage = arrow.speed * arrow.power;
        enemy.reduceHealth(damage);
        renderDamageLabel(Math.round(damage), arrow.position.clone());
    }
}

DefaultAbility.id = 1;
