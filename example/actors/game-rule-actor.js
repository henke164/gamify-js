class GameRuleActor
{
    constructor(game, bowActor, enemyActor) {
        this.bowActor = bowActor;
        this.enemyActor = enemyActor;
        this.gameRules = [new DefaultGameRule(game)];
        this.onEnemyHit = this.onEnemyHit.bind(this);
    }

    update() {
        this.handleArrowAndEnemyCollisions();
    }

    handleArrowAndEnemyCollisions() {
        var collisions = CollisionDetector.findCollisions(
            this.bowActor.arrows,
            this.enemyActor.enemies);

        this.runActionForCollisions(collisions, this.onEnemyHit);
    }

    runActionForCollisions(collisions, action) {
        collisions.forEach(collision => {
            action(collision.go1, collision.go2);
        });
    }

    onEnemyHit(arrow, enemy) {
        this.gameRules.forEach(rule => {
            rule.onEnemyHit(arrow, enemy);
        });
    }
}
