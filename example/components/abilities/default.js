class DefaultAbility
{
    constructor(game) {
        this.game = game;
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

    onEnemyHit(arrow, enemy) {
        enemy.reduceHealth(arrow.speed * arrow.power);

        if (arrow.destroyOnImpact) {
            arrow.shouldDestroy = true;
        }
    }
}
