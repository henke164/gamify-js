class DefaultGameRule
{
    constructor(game) {
        this.game = game;
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
