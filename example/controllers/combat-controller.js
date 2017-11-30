class CombatController
{
    constructor(game) {
        this.game = game;
        this.initializeAbilities();
        this.onEnemyHit = this.onEnemyHit.bind(this);
        this.onShoot = this.onShoot.bind(this);
        this.damageLabels = [];
        this.enemiesDestroyed = 0;
    }

    initializeAbilities() {
        this.abilities = [];

        for (var x = 0; x < Player.abilities.length; x++) {
            var ability = Player.abilities[x].type;
            var level = Player.abilities[x].level;
            if (level > 0) {
                this.abilities.push(new ability(this.game, level));
            }
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
        if (this.arrowAlreadyHitEnemy(arrow, enemy)) {
            return;
        }

        for (var x = 0; x < this.abilities.length; x++) {
            this.abilities[x].onEnemyHit(arrow, enemy, this.addDamageLabel.bind(this));
        }

        if (arrow.destroyOnImpact) {
            arrow.shouldDestroy = true;
        }

        if (!arrow.hits) {
            arrow.hits = [enemy];
        } else {
            arrow.hits.push(enemy);
        }

        if (enemy.shouldDestroy) {
            this.enemiesDestroyed++;
        }
    }

    arrowAlreadyHitEnemy(arrow, enemy) {
        return arrow.hits && arrow.hits.indexOf(enemy) > -1;
    }

    addDamageLabel(amount, position, color = { r: 255, b: 255, g: 255 }) {
        var label = new Label(amount, position, 'HVD', '14px');
        label.opacity = 1;
        label.color = color;
        this.animateDamageLabel(label);
        this.damageLabels.push(label);
    }

    animateDamageLabel(label) {
        label.fontColor = 'rgba(' + label.color.r + ', ' + label.color.g + ', ' + label.color.b + ', ' + (label.opacity -= 0.02) + ')';
        label.position.y -= 1;
        return label.opacity < 0;
    }

    render(spriteBatch) {
        for(var x = 0; x < this.damageLabels.length; x++) {
            this.damageLabels[x].render(spriteBatch);
        }
    }
}
