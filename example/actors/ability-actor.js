class AbilityActor
{
    constructor(game) {
        this.game = game;
        this.initializeAbilities();
        this.onEnemyHit = this.onEnemyHit.bind(this);
        this.onShoot = this.onShoot.bind(this);
    }

    initializeAbilities() {
        this.abilities = [];

        for(var x = 0; x < User.abilities.length; x++) {
            var ability = User.abilities[x].type;
            var level = User.abilities[x].level;
            this.abilities.push(new ability(this.game, level));
        }

        this.abilities.push(new DefaultAbility(this.game));
    }

    onShoot() {
        for (var x = 0; x < this.abilities.length; x++) {
            this.abilities[x].onShoot()
        }
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
        for (var x = 0; x < this.abilities.length; x++) {
            this.abilities[x].onEnemyHit(arrow, enemy);
        }
    }
}
