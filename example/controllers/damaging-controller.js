class DamagingController
{
    constructor(game) {
        this.game = game;
        this.initializeAbilities();
        this.onEnemyHit = this.onEnemyHit.bind(this);
        this.onShoot = this.onShoot.bind(this);
        this.damageLabels = [];
    }

    initializeAbilities() {
        this.abilities = [];

        for(var x = 0; x < Player.abilities.length; x++) {
            var ability = Player.abilities[x].type;
            var level = Player.abilities[x].level;
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

        var idx = this.damageLabels.length
        while(idx--) {
            if(this.animateDamageLabel(this.damageLabels[idx])) {
                this.damageLabels.splice(idx, 1);
            }
        }
    }

    handleArrowAndEnemyCollisions() {
        var collisions = CollisionDetector.findCollisions(
            this.game.bowController.arrows.gameObjects,
            this.game.enemyController.enemies.gameObjects);

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

        var label = new Label('500', new Vector2(arrow.position.x, arrow.position.y), '', '14px Arial');
        label.opacity = 1;
        this.animateDamageLabel(label);
        this.damageLabels.push(label);
    }

    animateDamageLabel(label) {
        label.fontColor = 'rgba(255, 255, 255, ' + (label.opacity -= 0.02) + ')';
        label.position.y -= 1;
        return label.opacity < 0;
    }

    render(spriteBatch) {
        for(var x = 0; x < this.damageLabels.length; x++) {
            this.damageLabels[x].render(spriteBatch);
        }
    }
}
