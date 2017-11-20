class GameRuleActor
{
    constructor(game) {
        this.game = game;
        this.gameRules = [new DefaultGameRule(game)];
        this.onEnemyHit = this.onEnemyHit.bind(this);
    }

    update() {
        this.handleArrowAndEnemyCollisions();
    }

    handleArrowAndEnemyCollisions() {
        var collisions = CollisionDetector.findCollisions(
            this.game.bowActor.arrows.gameObjects,
            this.game.enemyActor.enemies.gameObjects);

        this.runActionForCollisions(collisions, this.onEnemyHit);
    }

    runActionForCollisions(collisions, action) {
        for (var x = 0; x < collisions.length; x++) {
            action(collisions[x].gameObject1, collisions[x].gameObject2);
        }
    }

    onEnemyHit(arrow, enemy) {
        for (var x = 0; x < this.gameRules.length; x++) {
            this.gameRules[x].onEnemyHit(arrow, enemy);
        }
    }
}
