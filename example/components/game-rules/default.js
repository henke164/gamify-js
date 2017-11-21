class DefaultGameRule
{
    constructor(game) {
        this.game = game;
    }

    onShoot() {
        var bowActor = this.game.bowActor;
        bowActor.arrow.speed = 10 + (bowActor.pullDistance / 10);
        bowActor.arrow.velocity = Vector2.direction(bowActor.arrow.position, bowActor.startPullLocation);
        bowActor.pullDistance = 0;
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
