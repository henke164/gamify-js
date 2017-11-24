class DefaultAbility extends BaseAbility
{
    constructor(game) {
        super(game, 0);
    }

    onShoot() {
        var bowController = this.game.bowController;

        if (bowController.arrow.speed == 0) {
            bowController.arrow.speed = 10 + (bowController.pullDistance / 10);
        }

        bowController.arrow.velocity = Vector2.direction(
            bowController.arrow.position, bowController.startPullLocation);
        bowController.pullDistance = 0;
    }

    onEnemyHit(arrow, enemy, renderDamageLabel) {
        if (this.arrowAlreadyHitEnemy(arrow, enemy)) {
            return;
        }

        enemy.reduceHealth(arrow.speed * arrow.power);
        renderDamageLabel(Math.round(arrow.speed * arrow.power), arrow.position.clone());

        if (arrow.destroyOnImpact) {
            arrow.shouldDestroy = true;
        }

        if (!arrow.hits) {
            arrow.hits = [enemy];
        } else {
            arrow.hits.push(enemy);
        }
    }
}
