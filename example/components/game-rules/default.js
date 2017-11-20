class DefaultGameRule
{
    constructor(game) {
        this.game = game;
    }

    onShoot(arrow, pullDistance) {
        arrow.speed = 10 + (pullDistance / 10);
        arrow.velocity = Vector2.direction(this.arrow.position, this.startPullLocation);
        pullDistance = 0;
    }

    onEnemyHit(arrow, enemy) {
        enemy.reduceHealth(arrow.speed * arrow.power);

        if (arrow.destroyOnImpact) {
            arrow.shouldDestroy = true;
        }

        if (enemy.shouldDestroy) {
            //this.score++;
            //this.scoreLabel.text = 'Score: ' + this.score;
            console.log('score');
        }
    }
}
